const board = document.querySelector("#container");

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

board.addEventListener("keyup", (event) => {
    if(event.isComposing || event.keyCode === 40){
        box.style.backgroundColor = getRandomColor();
        board.appendChild(box);
    }
})