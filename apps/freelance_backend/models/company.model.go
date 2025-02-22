package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Company struct {
	ID               primitive.ObjectID `bson:"_id, omitempty" json:"id"`
	Name             string             `bson:"name" json:"name" validate:"required"`
	Email            string             `bson:"email" json:"email" validate:"required,email"`
	Password         string             `bson:"password,omitempty" json:"password"`
	Website          string             `bson:"websiteURL" json:"websiteURL" validate:"required,url"`
	Description      string             `bson:"descrition" json:"description" validate:"required"`
	Location         string             `bson:"location" json:"location" validate:"required"`
	Industry         string             `bson:"industry" json:"industry" validate:"required"`
	Size             string             `bson:"size" json:"size" validate:"required"`
	LastModifiedTime time.Time          `bson:"lasttime" json:"lasttime"`
}

type LoginCompany struct {
	ID               primitive.ObjectID `bson:"_id, omitempty" json:"id"`
	Name             string             `bson:"name" json:"name"`
	Email            string             `bson:"email" json:"email" validate:"required,email"`
	Password         string             `bson:"password,omitempty" json:"password"`
	Website          string             `bson:"websiteURL" json:"websiteURL"`
	Description      string             `bson:"descrition" json:"description"`
	Location         string             `bson:"location" json:"location"`
	Industry         string             `bson:"industry" json:"industry"`
	Size             string             `bson:"size" json:"size"`
	LastModifiedTime time.Time          `bson:"lasttime" json:"lasttime"`
}
