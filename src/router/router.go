package router

import (
	"log"
	"net/http"
	"portfolio/controller"
)

// InitServ initializes the server and routes.
func InitServ() {
	// Define the port
	port := ":8080"

	// Register the main handler from the controller
	http.HandleFunc("/", controller.MainHandler)

	log.Printf("Server starting on http://localhost%s\n", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal(err)
	}
}
