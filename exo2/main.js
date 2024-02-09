const carre1 = document.querySelector("#one");
const carre2 = document.querySelector("#two");
const carre3 = document.querySelector("#three");
const carre4 = document.querySelector("#four");

//creating array containing all squares
const carres = [carre1, carre2, carre3, carre4];
//for each element in the array, toggle class "squareClicked"
carres.forEach((carre) => carre.addEventListener("click", function(){
    carre.classList.toggle("squareClicked");
})
);