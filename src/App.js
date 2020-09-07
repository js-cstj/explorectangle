/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 * 
	 * À faire. Étapes :
	 *   1) Reproduire à l'identique le HTML retrouvé dans le fichier resultat.html 
	 *      (dans la section AFFICHAGE)
	 *   2) Compléter la section SAISIE en se fiant aux commentaires
	 *   3) Compléter la section TRAITEMENT en se fiant aux commentaires
	 *   4) Adapter l'affichage pour utiliser les données à notre disposition
	 *   5) Se réjouir du résultat
	 * Note: Si vous n'avez pas encore vu les structures conditionnelles, 
	 *       faites comme si le rectangle n'était jamais carré (pas de confirm).
	 * Petit truc : Dans les prompt, mettez une valeur par défaut 
	 *              pour éviter d'avoir à les rentrer à chaque essai.
	 */
	static main() {
		// La largeur de l'apercu est toujours le même. On devra par contre calculer 
		// sa hauteur pour avoir les bonnes proportions
		const LARGEUR_VISUEL = 300;

		// SAISIE ===================================================
		var largeur, hauteur
		// Demander à l'usager la largeur du rectangle
		largeur = prompt("Quelle est la largeur du rectangle?", "4");
		// Demander à l'usager s'il s'agit d'un carré
		if (confirm("Est-ce un carré?")) {
			// Si c'est un carré, on donne à la hauteur la même valeur que la largeur
			hauteur = largeur;
		} else {
			// Si ce n'est pas un carré, on demande à l'usager la hauteur du rectangle
			hauteur = prompt("Quelle est la hauteur du rectangle?", "3");
		}

		// TRAITEMENT ===============================================
		var perimetre, superficie, diagonale;
		// La largeur doit être transformée en float
		largeur = parseFloat(largeur);
		// La hauteur doit être transformée en float
		hauteur = parseFloat(hauteur);
		// On calcule le périmètre
		perimetre = largeur * 2 + hauteur * 2;
		// On calcule la superficie
		superficie = largeur * hauteur;
		// On calcule la diagonale
		diagonale = Math.sqrt(largeur * largeur + hauteur * hauteur);

		// AFFICHAGE ================================================
		// Reproduire le HTML de resultat.html
		// Déterminez vous-mêmes les variables à utiliser
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
