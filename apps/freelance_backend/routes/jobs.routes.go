package routes

import (
	"golang-freelance_backend/controllers"
	"net/http"
)

func JobsRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/create/jobs", controllers.Jobposting)
	mux.HandleFunc("/jobs/active", controllers.Activejobs)
	mux.HandleFunc("/jobs/recent", controllers.Recentjobs)
}
