package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"golang-freelance_backend/database"
	"golang-freelance_backend/models"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

// Function to hash password
func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	if err != nil {
		return "", err
	}
	return string(bytes), nil
}

// Function to compare hashed password
func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	fmt.Println("inside check hash: ", err)
	return err == nil
}

// Function to create JWT token
func CreateJWTToken(id string) (string, error) {
	secret := os.Getenv("JWT_TOKEN_SECRET")
	if secret == "" {
		return "", fmt.Errorf("JWT_TOKEN_SECRET is not set")
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":  id,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

// --------------------- Sign-up route ----------------------------------
func GenerateClient(res http.ResponseWriter, req *http.Request) {
	if req.Method != http.MethodPost {
		http.Error(res, "Only POST method is allowed", http.StatusMethodNotAllowed)
		return
	}

	fmt.Println("inside GenerateClient...")

	var company models.Company
	err := json.NewDecoder(req.Body).Decode(&company)
	if err != nil {
		http.Error(res, "Invalid request payload", http.StatusBadRequest)
		return
	}

	fmt.Println("Initial company data:", company)

	company.ID = primitive.NewObjectID()
	fmt.Println("Original Password:", company.Password)

	// Hash password
	hashedPass, err := HashPassword(company.Password)
	if err != nil {
		http.Error(res, "Error while hashing the password", http.StatusBadRequest)
		return
	}

	fmt.Println("Hashed Password:", hashedPass)
	company.Password = hashedPass

	// Insert into MongoDB
	collection := database.GetCompanyCollection()
	savedCompany, err := collection.InsertOne(context.TODO(), company)
	if err != nil {
		http.Error(res, "Failed to save company", http.StatusInternalServerError)
		return
	}

	fmt.Println("Saved company to database:", savedCompany)

	// Convert `InsertedID` to string
	objectID, ok := savedCompany.InsertedID.(primitive.ObjectID)
	if !ok {
		http.Error(res, "Failed to generate ID", http.StatusInternalServerError)
		return
	}

	token, err := CreateJWTToken(objectID.Hex())
	if err != nil {
		http.Error(res, "Failed to create JWT token", http.StatusInternalServerError)
		return
	}

	res.WriteHeader(http.StatusCreated)
	json.NewEncoder(res).Encode(map[string]any{
		"message": "Company registered successfully",
		"data":    savedCompany,
		"token":   token,
	})
}

// ---------------------- Login route ----------------------------------
func LoginClient(res http.ResponseWriter, req *http.Request) {
	if req.Method != http.MethodPost {
		http.Error(res, "Only POST method is allowed", http.StatusMethodNotAllowed)
		return
	}

	fmt.Println("Inside LoginClient...")

	var credentials models.LoginCompany
	err := json.NewDecoder(req.Body).Decode(&credentials)
	if err != nil {
		http.Error(res, "Invalid request payload", http.StatusBadRequest)
		return
	}

	collection := database.GetCompanyCollection()
	var storedCompany models.Company

	// Find user by email
	err = collection.FindOne(context.TODO(), bson.M{"email": credentials.Email}).Decode(&storedCompany)
	if err != nil {
		http.Error(res, "Invalid email or password", http.StatusUnauthorized)
		return
	}

	fmt.Println("Stored Hash Password:", storedCompany.Password)

	// Compare password
	isValid := CheckPasswordHash(credentials.Password, storedCompany.Password)
	if !isValid {
		http.Error(res, "Please enter correct credentials", http.StatusUnauthorized)
		return
	}

	// Generate JWT token using company ID
	token, err := CreateJWTToken(storedCompany.ID.Hex())
	if err != nil {
		http.Error(res, "Failed to create JWT token", http.StatusInternalServerError)
		return
	}

	res.WriteHeader(http.StatusAccepted)
	json.NewEncoder(res).Encode(map[string]any{
		"message": "Login successful",
		"data":    storedCompany,
		"token":   token,
	})
}
