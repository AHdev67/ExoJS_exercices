const box = document.querySelector("#container");
const textInput = document.querySelector("#entree");
const result = document.querySelector("#resultat");

//input event qui change en live avec les changements
textInput.addEventListener("input", convert);

function convert(){
    //Récupération de l'input
    let montantEuros = textInput.value;
    
    //SI le montant en euros entré par l'utilisateur n'est pas un nombre, erreur
    if(isNaN(montantEuros)){
        alert("Entrée invalide : veuillez entrer un nombre");
        textInput.value = "";
    }
    //SINON procéder à la conversion.
    else{
        let montantFranc = montantEuros * 6.55957;
        result.innerText = `Conversion en francs : ${montantFranc.toFixed(2)}`;
    }
}