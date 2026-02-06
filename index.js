"use strict";

// renvoyer l’element HTML d’identifiant #game_selection :
let message1 = document.querySelector("#message1");
let game_selection = document.querySelector("#game_selection");
let game1 = document.querySelector("#game1");
let game2 = document.querySelector("#game2");
let restart_button1 = document.querySelector("#restart_button1");
let restart_button2 = document.querySelector("#restart_button2");
let try_button = document.querySelector("#try_button");

let computer_number; // Pour le jeu 1 
let min, max, proposition; // Pour le jeu 2 

// afficher un texte dans l’´element message1
message1.innerText = "un petit texte";
// afficher la valeur de l’input de type texte input_element


function show(element) {
    element.style.display = "";
}
function hide(element) {
element.style.display = "none";
}
function new_game() {
 // fonction qui montre l’´ecran de s´election du mode de jeu
show(game_selection);
hide(game1);
hide(game2);
}

function start_player_guess_game() {
    new_game("#game1");
    computer_number = Math.floor(Math.random() * 100);

    // Gestion de l'affichage
    hide(game_selection);
    show(game1);
    // On cache le bouton recommencer au début
    hide(restart_button1);

    // On vide l'input pour le prochain essai
    player_input.value = "";
    message1.innerText = "";
}
function start_computer_guess_game() {
    new_game("#game2");    
    // on initialise min et max
    min = 0;
    max = 100;
    proposition = Math.floor((min + max) / 2); 

    // Gestion de l'affichage
    hide(game_selection);
    show(game2);    
    // On cache le bouton recommencer au début
    hide(restart_button2);  
    message1.innerText = "Est ce que c'est " + proposition + "?";
}
function game2_starter(event){
   
    const idbouton = event.target.id;
    if (idDuBouton === "smaller_button") {
        console.log("plus petit");
        max = proposition - 1;
        
    } 
    else if (idDuBouton === "bigger_button") {
        console.log("plus grand");
        min = proposition + 1;
    }
    else if (idDuBouton === "found_button") {
        message2.innerText = "L'ordinateur a gagné !";
        show(restart_button2);
        return; 
    }
    proposition = Math.floor((min + max) / 2);
    message2.innerText = "Est-ce que c'est " + proposition + " ?";

}


function game1_starter(){
    
    console.log("game1 starter")
    // on recupere la valeur de player_input et on la mets dans number 
    let number = document.getElementById("player_input").value;
    number = parseInt(number);
    //test
    console.log("cmp number",computer_number)
    //le joueur a trouve le nombre 
    if (number == computer_number) {

        message1.innerText = "Bravo, vous avez trouve´";
        show(restart_button1);

    //le nombre est plus petit 
    } else if (number < computer_number) {
        
        message1.innerText = "Non, c'est plus grand";

    //le nombre est plus grand 
    } else if (number > computer_number) {
    
        message1.innerText = "Non, c’est plus petit";

    }
    //on vide player_input
    document.getElementById("player_input").value = "";
}
//la 1er game se lance en cliquant sur je devine
try_button.addEventListener("click", game1_starter);

document.querySelector("#smaller_button").addEventListener("click", game2_starter);
document.querySelector("#found_button").addEventListener("click", game2_starter);
document.querySelector("#bigger_button").addEventListener("click", game2_starter);

document.querySelector("#restart_button1").addEventListener("click", new_game);
document.querySelector("#start_game1").addEventListener("click", start_player_guess_game);
document.querySelector("#start_game2").addEventListener("click", start_computer_guess_game);
