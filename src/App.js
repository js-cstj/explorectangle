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

		// Demander à l'usager s'il s'agit d'un carré

			// Si c'est un carré, on donne à la hauteur la même valeur que la largeur
			
			// Si ce n'est pas un carré, on demande à l'usager la hauteur du rectangle


		// TRAITEMENT ===============================================
		var perimetre, superficie, diagonale, hauteur_visuel;
		// La largeur doit être transformée en float

		// La hauteur doit être transformée en float

		// On calcule le périmètre

		// On calcule la superficie

		// On calcule la diagonale
		diagonale = Math.sqrt(largeur * largeur + hauteur * hauteur);
		// On calcule la hauteur de l'aperçu
		hauteur_visuel = LARGEUR_VISUEL * hauteur / largeur;

		// AFFICHAGE ================================================
		// Reproduire le HTML de resultat.html
		// Déterminez vous-mêmes les variables à utiliser
		var app = document.getElementById("app");
		
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
