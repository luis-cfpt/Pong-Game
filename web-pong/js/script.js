// // Récupération du canvas et du contexte de dessin
// let jeu = document.getElementById("jeu");

// // Définition des constantes du jeu
// let LARGEUR_ECRAN = 640;
// let HAUTEUR_ECRAN = 480;
// let TAILLE_BALLE = 20;

// window.addEventListener('keydown', function (e) {
//     if (e.key == 'w')
//     {
//         move1(e.key);
//     }
//     if (e.key == 's')
//     {
//         move1(e.key);
//     }
// });

// window.addEventListener('keydown', function (e) {
//     if (e.key == '  ')
//     {
//         move2(e.key);
//     }
//     if (e.key == 'ArrowDown')
//     {
//         move2(e.key);
//     }
// });

// // Définition des éléments du jeu
// let joueur1 = {
//     x: 20,
//     y: HAUTEUR_ECRAN / 2 - 50,
//     largeur: 10,
//     hauteur: 100,
//     vitesse: 7
// };
// let joueur2 = {
//     x: LARGEUR_ECRAN - 30,
//     y: HAUTEUR_ECRAN / 2 - 50,
//     largeur: 10,
//     hauteur: 100,
//     vitesse: 7
// };
// let balle = {
//     x: LARGEUR_ECRAN / 2 - TAILLE_BALLE / 2,
//     y: HAUTEUR_ECRAN / 2 - TAILLE_BALLE / 2,
//     largeur: TAILLE_BALLE,
//     hauteur: TAILLE_BALLE,
//     vitesse_x: 5 * (Math.random() < 0.5 ? 1 : -1),
//     vitesse_y: 5 * (Math.random() < 0.5 ? 1 : -1)
// };

// function move1(key)
// {
//     if (key == "w" && joueur1.y > 0) 
//     {
//         joueur1.y -= joueur1.vitesse;
//         dessinerPlayer();
//     }
//     if (key == "s" && joueur1.y + joueur1.hauteur < HAUTEUR_ECRAN) 
//     {
//         joueur1.y += joueur1.vitesse;
//         dessinerPlayer();
//     }
// }

// function move2(key)
// {
//     if (key == "ArrowUp" && joueur2.y > 0) 
//     {
//         joueur2.y -= joueur2.vitesse;
//         dessinerPlayer();
//     }
//     if (key == "ArrowDown" && joueur2.y + joueur2.hauteur < HAUTEUR_ECRAN) 
//     {
//         joueur2.y += joueur2.vitesse
//         dessinerPlayer();
//     }
// }

// // Fonction pour dessiner les éléments du jeu
// function dessinerPlayer() 
// {
//     // Dessine les joueurs
//     paddles = `<div style="position: absolute; left: ${joueur1.x}px; top: ${joueur1.y}px; background-color: #fff; width: ${joueur1.largeur}px; height:${joueur1.hauteur}px;"></div><div style="position: absolute; left: ${joueur2.x}px; top: ${joueur2.y}px; background-color: #fff; width: ${joueur2.largeur}px; height:${joueur2.hauteur}px;"></div>`;
//     jeu.innerHTML = paddles;
    
// }

// // Fonction pour dessiner les éléments du jeu
// function dessinerBall() 
// {
//     // Efface l'écran
//     contexte.clearRect(0, 0, LARGEUR_ECRAN, HAUTEUR_ECRAN);

//     // Dessine la balle
//     contexte.fillStyle = "white";
//     contexte.fillRect(balle.x, balle.y, balle.largeur, balle.hauteur);
// }

// // Boucle principale du jeu
// function boucleJeu() 
// {
//     let run = true
//     dessinerPlayer();

//     // while (run)
//     // {
//     //     balle.x += balle.vitesse_x
//     //     balle.y += balle.vitesse_y  
//     //     // Mouvements des joueurs
//     //     if (key == "up" && joueur1.y > 0) 
//     //     {
//     //         console.log("key = " + key);
//     //         joueur1.y -= joueur1.vitesse;
//     //         dessinerPlayer();
//     //     }
//     //     if (key == "down" && joueur1.y + joueur1.hauteur < HAUTEUR_ECRAN) 
//     //     {
//     //         joueur1.y += joueur1.vitesse;
//     //         dessinerPlayer();
//     //     }
//     //     if (key == "w" && joueur2.y > 0) 
//     //     {
//     //         joueur2.y -= joueur2.vitesse;
//     //         dessinerPlayer();
//     //     }
//     //     if (key == "s" && joueur2.y + joueur2.hauteur < HAUTEUR_ECRAN) 
//     //     {
//     //         joueur2.y += joueur2.vitesse
//     //         dessinerPlayer();
//     //     }
//     //     run = false;
//     // }
// }

// boucleJeu();

// // let __name__ = "__main__";

// // while (__name__ == '__main__') 
// // {   
// //     boucleJeu();
// //     __name__ = null;
// // }