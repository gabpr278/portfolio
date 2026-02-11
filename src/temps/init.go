package temps

import (
	"html/template"
	"log"
	"os"
)

// Temp est la variable globale qui sera utilisée par les controllers
// La majuscule est importante pour qu'elle soit "publique" (exportée)
var Temp *template.Template

func InitTemps() {
	var err error

	// Vérification du chemin pour éviter les erreurs bêtes
	// On cherche tous les fichiers .html dans le dossier src/temps
	path := "src/temps/*.html"
	
	// Si on ne trouve pas le dossier, on essaie de comprendre où on est (debug)
	if _, err := os.Stat("src/temps"); os.IsNotExist(err) {
		log.Println("⚠️ Attention : Le dossier src/temps semble introuvable depuis l'endroit où tu lances le terminal.")
	}

	// Chargement des fichiers
	Temp, err = template.ParseGlob(path)
	if err != nil {
		log.Fatalf("Erreur fatale lors du chargement des templates : %v", err)
	}
}