package controller

import (
	"net/http"
	"os"
)

// InitTemps initializes templates if necessary.
// Currently, we are serving static HTML files, so this might be a placeholder
// or used for future template parsing.
func InitTemps() {
	// Placeholder for template initialization
}

// MainHandler handles all requests and routes them to the correct file.
func MainHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path

	// 1. Serve portfolio.html as the home page
	if path == "/" {
		http.ServeFile(w, r, "temps/portfolio.html")
		return
	}

	// 2. Try to serve from static/ (e.g., style.css, script.js, images)
	// The browser requests /style.css, we serve static/style.css
	if _, err := os.Stat("static" + path); err == nil {
		http.ServeFile(w, r, "static"+path)
		return
	}

	// 3. Try to serve from temps/ (e.g., ecommerce.html, power4.html)
	// This allows links like "ecommerce.html" to work even if the file is physically in temps/
	if _, err := os.Stat("temps" + path); err == nil {
		http.ServeFile(w, r, "temps"+path)
		return
	}

	// 4. Default 404 if not found
	http.NotFound(w, r)
}
