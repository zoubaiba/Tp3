       "use strict";
       //selection des elements HTML
       const game_selection = document.querySelector('#game_selection');
        
        // Éléments Game 1
        const game1 = document.querySelector('#game1');
        const player_input = document.querySelector('#player_input');
        const try_button = document.querySelector('#try_button');
        const message1 = document.querySelector('#message1');
        const restart_button1 = document.querySelector('#restart_button1');
        const start_game1_btn = document.querySelector('#start_game1');

        // Éléments Game 2
        const game2 = document.querySelector('#game2');
        const message2 = document.querySelector('#message2');
        const smaller_button = document.querySelector('#smaller_button');
        const bigger_button = document.querySelector('#bigger_button');
        const found_button = document.querySelector('#found_button');
        const restart_button2 = document.querySelector('#restart_button2');
        const start_game2_btn = document.querySelector('#start_game2');

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
    // on genere un entier pour l'ordi
    computer_number = Math.floor(Math.random() * 100);
    hide(game_selection);
    show(game1);
    hide(restart_button1);

    // On vide l'input pour le prochain essai
    player_input.value = "";
    // On garde le focus sur l'input pour taper vite 
    message1.innerText = "";
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


document.querySelector("#restart_button1").addEventListener("click", new_game);
document.querySelector("#start_game1").addEventListener("click", start_player_guess_game);
document.querySelector("#start_game2").addEventListener("click", new_game);
