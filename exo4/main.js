const board = document.querySelector("#container");

//fonction de randomization de couleur tirée de stack overflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const box = document.createElement("div");
box.classList.add("square");

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(e) {
    //initialisation de la nouvelle case
    const newBox = box.cloneNode(true);
    newBox.style.backgroundColor = getRandomColor();
    
    //SI flèche du bas, alors on ajoute une case
    if (e.keyCode == '40'){
        board.appendChild(newBox);
    }
    //SINON SI flèche du haut, retirer dernier élément de board
    else if (e.keyCode == '38'){
        board.lastElementChild.remove();
    }

    //SI on click sur une case, on la colorie en noir
    newBox.addEventListener("click", function(){
        newBox.style.backgroundColor = "rgb(0, 0, 0)";
    })
}