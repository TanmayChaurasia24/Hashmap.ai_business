package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	CompanyCollection *mongo.Collection
)

func ConnectDB() {
	MongoURI := os.Getenv("MONGO_URI")
	fmt.Println("mongo uri: ", MongoURI)
	clientOptions := options.Client().ApplyURI(MongoURI)
	fmt.Println("client options: ", clientOptions)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal("❌ Failed to connect to the database:", err)
	}

	fmt.Println("✅ Connected to the database successfully!")

	CompanyCollection = client.Database("prohirecompanies").Collection("companies")
}

func GetCompanyCollection() *mongo.Collection {
	return CompanyCollection
}
