// Récupération du canvas et du contexte de dessin
var canvas = document.getElementById("jeu");
var contexte = canvas.getContext("2d");

// Définition des constantes du jeu
var LARGEUR_ECRAN = 640;
var HAUTEUR_ECRAN = 480;
var TAILLE_BALLE = 20;

// Définition des éléments du jeu
var joueur1 = {
    x: 20,
    y: HAUTEUR_ECRAN / 2 - 50,
    largeur: 10,
    hauteur: 100,
    vitesse: 5
};
var joueur2 = {
    x: LARGEUR_ECRAN - 30,
    y: HAUTEUR_ECRAN / 2 - 50,
    largeur: 10,
    hauteur: 100,
    vitesse: 5
};
var balle = {
    x: LARGEUR_ECRAN / 2 - TAILLE_BALLE / 2,
    y: HAUTEUR_ECRAN / 2 - TAILLE_BALLE / 2,
    largeur: TAILLE_BALLE,
    hauteur: TAILLE_BALLE,
    vitesse_x: 5 * (Math.random() < 0.5 ? 1 : -1),
    vitesse_y: 5 * (Math.random() < 0.5 ? 1 : -1)
};

// Fonction pour dessiner les éléments du jeu
function dessinerPlayer() 
{
    // Efface l'écran
    contexte.clearRect(0, 0, LARGEUR_ECRAN, HAUTEUR_ECRAN);

    // Dessine les joueurs et la balle
    contexte.fillStyle = "white";
    contexte.fillRect(joueur1.x, joueur1.y, joueur1.largeur, joueur1.hauteur);
    contexte.fillRect(joueur2.x, joueur2.y, joueur2.largeur, joueur2.hauteur);
}

// Fonction pour dessiner les éléments du jeu
function dessinerBall() 
{
    // Efface l'écran
    contexte.clearRect(0, 0, LARGEUR_ECRAN, HAUTEUR_ECRAN);

    // Dessine les joueurs et la balle
    contexte.fillStyle = "white";
    contexte.fillRect(balle.x, balle.y, balle.largeur, balle.hauteur);
}

// Boucle principale du jeu
function boucleJeu() 
{
    key = "up";
    // console.log(key);
    // Mouvements des joueurs
    if (key == "up" && joueur1.y > 0) 
    {
        joueur1.y -= joueur1.vitesse;
        dessinerPlayer();
    }
    if (key == "down" && joueur1.y + joueur1.hauteur < HAUTEUR_ECRAN) 
    {
        joueur1.y += joueur1.vitesse;
        dessinerPlayer();
    }
    if (key == "w" && joueur2.y > 0) 
    {
        joueur2.y -= joueur2.vitesse;
        dessinerPlayer();
    }
    if (key == "s" && joueur2.y + joueur2.hauteur < HAUTEUR_ECRAN) 
    {
        joueur2.y += joueur2.vitesse
        dessinerPlayer();
    }
}

while (true) {   
    dessinerBall();  
    boucleJeu();
    return false;
}