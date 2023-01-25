function onceUpponATime() {
    // Personnalisation de l'expérience de l'utilisateur


var userGender = prompt("Quel est votre genre ? (H/F)");
if (userGender.toUpperCase() === "H") {
  output.innerHTML = "Bonjour Monsieur";
} else if (userGender.toUpperCase() === "F") {
  output.innerHTML = "Bonjour Madame";
} else {
  output.innerHTML = "Invalide";
}
var userName = prompt("Quel est votre prénom?");
output.innerHTML = "Enchanté, " + userName;


output.innerHTML = "Vous êtes arrivés dans le village fantastique de Valleyspirit ! ";
//Entrée dans le roleplay


//Selection du personnage
var question = "Quel personnage souhaitez-vous interpréter ?";
var choices = ["Sorcière", "Guerrier", "Dragon", "Elfe"];

var firstOption = "Sorcière";{
// var buttonSorciere = document.createElement("button");
// var buttonSText = document.createTextNode("Sorcière");
// buttonSorciere.appendChild(buttonSText);
// document.body.appendChild(buttonSorciere);
// buttonSorciere.addEventListener("click", function(){
//   buttonSText.innerHTML = "En tant que Sorcière, vous devez créer une potion pour le roi, lui permettant de devenir immortel !";
// });

}

var secondOption = "Guerrier";{
// var buttonGuerrier = document.createElement("button");
// var buttonGText = document.createTextNode("Guerrier");
// buttonGuerrier.appendChild(buttonGText);
// document.body.appendChild(buttonGuerrier);
// buttonGuerrier.addEventListener("click", function(){
//   buttonGText.innerHTML = "En tant que Guerrier, le roi vous a confié une mission, vous devez tuer le dragon qui terrorise les habitants !";
// });

}

var thirdOption = "Dragon";{
// var buttonDragon = document.createElement("button");
// var buttonDText = document.createTextNode("Dragon");
// buttonDragon.appendChild(buttonDText);
// document.body.appendChild(buttonDragon);
// var buttonD = document.getElementById("Button");
// var buttonDT = document.getElementById("Elfe");
// buttonD.addEventListener("click", function(){
//   buttonDText.innerHTML = "En tant que Dragon, votre ennemi est le roi car il a fait tuer vos parents, et maintenant il veut vous tuer ! ";
// });

}

var fourthOption ="Elfe";

// var buttonElfe = document.getElementById("Button");
// var buttonEText = document.getElementById("Elfe");
// buttonElfe.addEventListener("click", function(){
//   buttonEText.innerHTML = "En tant qu'Elfe, vous devez aider votre ami le Dragon en essayant de raisonner quiconque tenterait de s'en prendre à lui!";
// });




var userAnswer = prompt(question, choices);
if (userAnswer === firstOption) {
    output.innerHTML = "En tant que Sorcière, vous devez créer une potion pour le roi, lui permettant de devenir immortel !";
}
if (userAnswer === secondOption){
    output.innerHTML = "En tant que Guerrier, le roi vous a confié une mission, vous devez tuer le dragon qui terrorise les habitants !";


}
 
if (userAnswer === thirdOption){
    output.innerHTML = "En tant que Dragon, votre ennemi est le roi car il a fait tuer vos parents, et maintenant il veut vous tuer ! ";


}


if (userAnswer === fourthOption){
    output.innerHTML = "En tant qu'Elfe, vous devez aider votre ami le Dragon en essayant de raisonner quiconque tenterait de s'en prendre à lui!";


}

}