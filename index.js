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
function new_game() { // fonction qui montre l’´ecran de s´election du mode de jeu
show(game_selection);
hide(game1);
hide(game2);
}

function start_player_guess_game() {
    new_game("#game1");
    computer_number = Math.random() * 100;
    hide(game_selection);
    show(game1);
    hide(restart_button1);

    player_input.value = "";
    message1.innerText = "";
}

function game1_starter(){
    
    console.log("game1 starter")
    let number = document.getElementById("player_input").value;
    number = parseInt(number);
    console.log("number" , number)
    console.log("cmp number",computer_number)
    if (number == computer_number) {

        message1.innerText = "Bravo, vous avez trouv´";
        show(restart_button1);

    } else if (number < computer_number) {
        
        message1.innerText = "Non, c'est plus grand";
    } else if (number > computer_number) {
    
        message1.innerText = "Non, c’est plus petit";
    }
    document.getElementById("player_input").value = "";
}
try_button.addEventListener("click", game1_starter);


document.querySelector("#restart_button1").addEventListener("click", new_game);
document.querySelector("#start_game1").addEventListener("click", start_player_guess_game);
document.querySelector("#start_game2").addEventListener("click", new_game);
