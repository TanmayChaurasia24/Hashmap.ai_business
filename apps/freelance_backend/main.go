package main

import (
	"fmt"
	"golang-freelance_backend/database"
	"golang-freelance_backend/routes"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	database.ConnectDB()

	mux := http.NewServeMux()
	routes.ClientsRoutes(mux)
	routes.JobsRoutes(mux)

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}).Handler(mux)

	fmt.Println("🚀 Server is running on port:", port)
	err = http.ListenAndServe(":"+port, handler)
	if err != nil {
		log.Fatal("❌ Failed to start server:", err)
	}
}
