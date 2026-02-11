package controller

import (
	"database/sql"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

// InitTemps initializes templates if necessary.
func InitTemps() {
	// Placeholder for template initialization
}

// getDB établit la connexion à la base de données
func getDB() *sql.DB {
	databaseURL := os.Getenv("DATABASE_URL")
	db, err := sql.Open("mysql", databaseURL)
	if err != nil {
		log.Fatal(err)
	}
	return db
}

// TodoHandler handles the todo list route
func TodoHandler(w http.ResponseWriter, r *http.Request) {
	db := getDB()
	defer db.Close()

	// Example query - adjust table name and columns as needed
	// rows, err := db.Query("SELECT id, task FROM todos")
	// if err != nil {
	// 	log.Println(err)
	// 	http.Error(w, "Database error", 500)
	// 	return
	// }
	// defer rows.Close()

	// For now, just serve the static file or template
	http.ServeFile(w, r, "src/temps/todo.html")
}

// MainHandler handles all requests and routes them to the correct file.
func MainHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path

	// 1. Serve portfolio.html as the home page
	if path == "/" {
		http.ServeFile(w, r, "src/temps/portfolio.html")
		return
	}

	// 2. Try to serve from static/ (e.g., style.css, script.js, images)
	if _, err := os.Stat("src/static" + path); err == nil {
		http.ServeFile(w, r, "src/static"+path)
		return
	}

	// 3. Try to serve from temps/ (e.g., ecommerce.html, power4.html)
	if _, err := os.Stat("src/temps" + path); err == nil {
		http.ServeFile(w, r, "src/temps"+path)
		return
	}

	// 4. Default 404 if not found
	http.NotFound(w, r)
}
