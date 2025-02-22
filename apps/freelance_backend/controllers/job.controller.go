package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"golang-freelance_backend/database"
	"golang-freelance_backend/kafka"
	"golang-freelance_backend/models"
	"net/http"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func Jobposting(res http.ResponseWriter, req *http.Request) {
	if req.Method != http.MethodPost {
		http.Error(res, "Invalid request method", http.StatusBadRequest)
		return
	}

	fmt.Println("Inside jobposting")

	var jobs models.Jobs
	err := json.NewDecoder(req.Body).Decode(&jobs)
	if err != nil {
		http.Error(res, "Invalid request body", http.StatusBadRequest)
		return
	}

	fmt.Println("Initial job posting detail: ", jobs)

	jobs.ID = primitive.NewObjectID()
	collection := database.GetJobsCollection()

	savedJob, err := collection.InsertOne(context.TODO(), jobs)
	if err != nil {
		http.Error(res, "Failed to save job posting", http.StatusInternalServerError)
		return
	}

	fmt.Println("Saved job posting: ", savedJob)

	jobID, ok := savedJob.InsertedID.(primitive.ObjectID)
	if !ok {
		http.Error(res, "Failed to generate ID", http.StatusInternalServerError)
		return
	}

	kafka.ProducerJobPosting(
		jobID,
		jobs.Title,
		jobs.Description,
		jobs.Company,
		jobs.Location,
		jobs.Salary,
		jobs.Jobtype,
		jobs.Applicationurl,
		jobs.Skills,
		jobs.Postedby,
	)

	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusCreated)
	json.NewEncoder(res).Encode(map[string]interface{}{
		"message": "Job posted successfully",
		"job":     jobs,
	})
}
