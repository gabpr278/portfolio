package main

import (
	"portfolio/controller"
	"portfolio/router"
)

func main() {
	// Initialize templates (if any)
	controller.InitTemps()

	// Initialize and start the server
	router.InitServ()
}
