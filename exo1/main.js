const carre = document.querySelector(".square");
const carreStyle = window.getComputedStyle(carre);

const classe = carre.className;
console.log(classe);

const textColor = carreStyle.getPropertyValue("color");
console.log(textColor);

const bgColor = carreStyle.getPropertyValue("background-color");
console.log(bgColor);

const hauteur = carreStyle.getPropertyValue("height");
console.log(hauteur);

const largeur = carreStyle.getPropertyValue("width");
console.log(largeur);

const align = carreStyle.getPropertyValue("text-align");
console.log(align);

const hauteurLigne = carreStyle.getPropertyValue("line-height");
console.log(hauteurLigne);

const taillePolice = carreStyle.getPropertyValue("font-size");
console.log(taillePolice);

const curseur = carreStyle.getPropertyValue("cursor");
console.log(curseur);

carre.addEventListener("click", function(){
    alert(`Class : ${classe}\n
        -color : ${textColor}
        -background-color : ${bgColor}
        -height : ${hauteur}
        -width : ${largeur}
        -text-align : ${align}
        -line-height : ${hauteurLigne}
        -font-size : ${taillePolice}
        -cursor : ${curseur}`);
});