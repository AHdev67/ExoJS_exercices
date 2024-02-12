// Si tourJoueur = true, tour joueur X, sinon tour joueur O
let tourJoueur = "true";

const cells = document.querySelectorAll(".cell");
const board = document.querySelector("#container");
const currentTurn = document.querySelector("#gameState");
const longTableau = cells.length
var count = 1

// remplissage des cases


    cells.forEach((cell) => cell.addEventListener("click", function(){
        console.log(count)
        if (tourJoueur){
            cell.classList.toggle("joueur1")
            cell.innerText = "X";
            if( count >= cells.length){
                currentTurn.value = "Partie Terminée";
            }
            else{
                changerTour();
                afficherTour();
            }
        }
        else{
            cell.classList.toggle("joueur2")
            cell.innerText = "O";
             
            if( count >= cells.length){
                currentTurn.value = "Partie Terminée";
            }
            else{
                changerTour();
                afficherTour();
            }
        }
        count++
        
    }, {once : true}))
    
// changement de tour
function changerTour(){
    if (tourJoueur){
        tourJoueur = false;
    }
    else{
        tourJoueur = true;
    }
}

// affichage du tour à jouer
function afficherTour(){
    if (tourJoueur){
        currentTurn.value = "";
        currentTurn.value = "C'est au tour de X";
    }
    else{
        currentTurn.value = "";
        currentTurn.value = "C'est au tour de O";
    }
}