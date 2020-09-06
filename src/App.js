/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		const LARGEUR_VISUEL = 300;

		// SAISIE ===================================================
		var largeur, hauteur
		largeur = prompt("Quelle est la largeur du rectangle?", "4");
		if (confirm("Est-ce un carré?")) {
			hauteur = largeur;
		} else {
			hauteur = prompt("Quelle est la hauteur du rectangle?", "3");
		}

		// TRAITEMENT ===============================================
		var perimetre, superficie, diagonale;
		largeur = parseFloat(largeur);
		hauteur = parseFloat(hauteur);
		perimetre = largeur * 2 + hauteur * 2;
		superficie = largeur * hauteur;
		diagonale = Math.sqrt(largeur * largeur + hauteur * hauteur);

		// AFFICHAGE ================================================
		var app = document.getElementById("app");
		var visuel = app.appendChild(document.createElement("div"));
		visuel.classList.add("visuel");
		
		var rectangle = visuel.appendChild(document.createElement("div"));
		rectangle.classList.add("rectangle");
		rectangle.style.width = LARGEUR_VISUEL+"px";
		rectangle.style.height = (LARGEUR_VISUEL * hauteur / largeur) + "px";
		rectangle.innerHTML = "PROPORTIONS";

		var divHauteur = visuel.appendChild(document.createElement("div"));
		divHauteur.classList.add("hauteur");
		divHauteur.innerHTML = hauteur.toFixed(1) + "mm";
		
		var divLargeur = visuel.appendChild(document.createElement("div"));
		divLargeur.classList.add("largeur");
		divLargeur.innerHTML = largeur.toFixed(1) + "mm";
		
		var donnees = app.appendChild(document.createElement("div"));
		donnees.classList.add("donnees");
		
		var divPerimetre = donnees.appendChild(document.createElement("div"));
		divPerimetre.classList.add("perimetre");
		divPerimetre.innerHTML = perimetre.toFixed(1) + "mm";
		
		var divSuperficie = donnees.appendChild(document.createElement("div"));
		divSuperficie.classList.add("superficie");
		divSuperficie.innerHTML = superficie.toFixed(1) + "mm²";
		
		var divDiagonale = donnees.appendChild(document.createElement("div"));
		divDiagonale.classList.add("diagonale");
		divDiagonale.innerHTML = diagonale.toFixed(1) + "mm";
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
