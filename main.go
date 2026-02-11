package main

import (
	// ✅ Correction 1 : On met le chemin COMPLET (comme dans le go.mod)
	"github.com/gabpr278/portfolio/src/router"
	
	// ✅ Correction 2 : On corrige la faute "teps" -> "temps"
	"github.com/gabpr278/portfolio/src/temps"
)

func main() {
	// 1. On initialise les templates HTML
	temps.InitTemps()

	// 2. On lance le serveur
	router.InitServ()
}