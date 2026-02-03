// renvoyer l’´el´ement HTML d’identifiant #game_selection :
let message1 = document.querySelector("#message1");
// afficher un texte dans l’´element message1
message1.innerText = "un petit texte";
// afficher la valeur de l’input de type texte input_element
console.log(input_element.value);

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
    new_game();
}