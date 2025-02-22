package kafka

import (
	"fmt"
	"log"

	"github.com/IBM/sarama"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func ProducerJobPosting(
	id primitive.ObjectID, title string, description string,
	company string, location string, salary string, jobtype string,
	applicationurl string, skills string, postedby primitive.ObjectID,
) {
	broker := "localhost:9092"

	config := sarama.NewConfig()
	config.Producer.Return.Successes = true

	producer, err := sarama.NewSyncProducer([]string{broker}, config)
	if err != nil {
		log.Println("Error while creating Kafka producer:", err)
		return
	}
	defer producer.Close()

	messageValue := fmt.Sprintf(`{
		"id": "%s",
		"title": "%s",
		"description": "%s",
		"company": "%s",
		"location": "%s",
		"salary": "%s",
		"jobtype": "%s",
		"applicationurl": "%s",
		"skills": "%s",
		"postedby": "%s"
	}`, id.Hex(), title, description, company, location, salary, jobtype, applicationurl, skills, postedby.Hex())

	message := &sarama.ProducerMessage{
		Topic: "job-postings",
		Value: sarama.StringEncoder(messageValue),
	}

	partition, offset, err := producer.SendMessage(message)
	if err != nil {
		log.Println("Error while sending message:", err)
		return
	}

	log.Printf("Message sent successfully to Kafka (Partition: %d, Offset: %d)\n", partition, offset)
}
