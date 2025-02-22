package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Jobs struct {
	ID             primitive.ObjectID `bson:"_id, omitempty" json:"id"`
	Title          string             `bson:"title" json:"title" validate:"required"`
	Description    string             `bson:"description" json:"description" validate:"required"`
	Company        string             `bson:"company" json:"company" validate:"required"`
	Location       string             `bson:"location" json:"location" validate:"required"`
	Salary         string             `bson:"salary" json:"salary" validate:"required"`
	Jobtype        string             `bson:"jobtype" json:"jobtype" validate:"required"`
	Applicationurl string             `bson:"applicationurl" json:"applicationurl" validate:"required"`
	Skills         string             `bson:"skills" json:"skills" validate:"required"`
	Postedby       primitive.ObjectID `bson:"postedby,omitempty"`
}
