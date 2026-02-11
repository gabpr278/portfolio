package router

import (
	"log"
	"net/http"
	"os"

	"github.com/gabpr278/portfolio/src/controller"
)

// InitServ initializes the server and routes.
func InitServ() {
	// Define the port
	port := os.Getenv("PORT")
	host := os.Getenv("HOST")
	addr := host + ":" + port

	// Register the todo handler
	http.HandleFunc("/todo", controller.TodoHandler)

	// Register the main handler from the controller
	http.HandleFunc("/", controller.MainHandler)

	log.Printf("Server starting on http://%s\n", addr)
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatal(err)
	}
}
