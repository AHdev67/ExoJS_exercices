const playerX = "X";
const playerO = "O";
//combinaisons gagnantes pour la fonction verifVictoire
const winningCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const cellElements = document.querySelectorAll("data-cell");
const containerElement = document.querySelector("#container");
const currentGameState = document.querySelector("#gameState");

//premier tout attribué à joueur X
let isPlayer_O_Turn = false;

startGame();

function startGame(){
    isPlayer_O_Turn = false;
    cellElements.forEach((cell) =>{
        cell.classList.remove(playerX);
        cell.classList.remove(playerO);
        cell.innerHTML = "";
        
        cell.addEventListener("click", manageCell, { once: true });
    });
    setBoardHoverClass();
}


function manageCell(e){
    const cell = e.target;
  
    const currentClass = isPlayer_O_Turn ? playerO : playerX;
    placeMark(cell, currentClass);
  
    if (checkWin(currentClass)){
        endGame(false);
    
    } else if (isDraw()){
        endGame(true);
    } else {
        switchTurn();
        setBoardHoverClass();
    }
}

function endGame(egalite){
    if (egalite){
        alert("Egalité ...");
    } else{
        alert(`Joueur ${isPlayer_O_Turn ? "2" : "1"} a gagné !`);
    }
}
  
function isDraw(){
    return [...cellElements].every((cell) =>{
        return(
            cell.classList.contains(playerX) ||
            cell.classList.contains(playerO)
        );
    });
}
  
function placement(cell, currentClass){
    cell.classList.add(currentClass);
    cell.innerHTML = `<span style="font-size: 50px;">${
        isPlayer_O_Turn ? "O" : "X"
    }</span>`;
}
  
function setBoardHoverClass(){
    containerElement.classList.remove(playerX);
    containerElement.classList.remove(playerO);
    if (isPlayer_O_Turn){
        containerElement.classList.add(playerO);
    } else{
        containerElement.classList.add(playerX);
    }
}
  
function checkWin(currentClass){
    return winningCombo.some((combination) =>{
        return combination.every((index) =>{
        return cellElements[index].classList.contains(currentClass);
      });
    });
}
  
function switchTurn(){
    isPlayer_O_Turn = !isPlayer_O_Turn;
}