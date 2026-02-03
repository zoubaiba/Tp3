// renvoyer l’element HTML d’identifiant #game_selection :
let message1 = document.querySelector("#message1");
let game_selection = document.querySelector("#game_selection");
let game1 = document.querySelector("#game1");
let game2 = document.querySelector("#game2");
let restart_button1 = document.querySelector("#restart_button1");
let restart_button2 = document.querySelector("#restart_button2");
let try_button = document.querySelector("#try_button");

// afficher un texte dans l’´element message1
message1.innerText = "un petit texte";
// afficher la valeur de l’input de type texte input_element


function show(element) {
    element.style.display = "";
}
function hide(element) {
element.style.display = "none";
}
function new_game(game_selection) { // fonction qui montre l’´ecran de s´election du mode de jeu
    if (game_selection == "#game2") {
        hide(game2);
        show(game1);
    } else if (game_selection == "#game1") {
        hide(game1);
        show(game2);
    }
}

function start_player_guess_game() {
    new_game("#game1");
    let computer_number = Math.random() * 100;
    hide(game2);
    hide(game_selection);
    hide(restart_button1);
    let number = document.getElementById("player_input").value.parseInt();

    if (number == computer_number) {
        show(message1);
        message1.innerText = "Bravo, vous avez trouv´";
    } else if (number < computer_number) {
        show(message1);
        message1.innerText = "Non, c'est plus grand";
    } else if (number > computer_number) {
        show(message1);
        message1.innerText = "Non, c’est plus petit";
    }
    document.getElementById("player_input").value = "";
}



document.querySelector("#restart_button1").addEventListener("click", new_game("#game1"));
document.querySelector("#try_button").addEventListener("click", start_player_guess_game);
document.querySelector("#start_game1").addEventListener("click", new_game("#game1"));
document.querySelector("#start_game2").addEventListener("click", new_game("#game2"));
