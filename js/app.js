/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// THIS WILL START THE GAME
let game;
document.getElementById(`btn__reset`).addEventListener("click", () => {
    game = new Game()
    game.startGame();
});

// EVENT LISTENER TO CHECK FOR MOUSE CLICK
let qwerty = document.getElementsByClassName("key");

    for (let i = 0; i < qwerty.length; i++) {
    qwerty[i].addEventListener("click", e => {
        game.handleInteraction(e.target);
        console.log(e.target)
    });
};

// EVENT LISTENER FOR KEYBOARD CLICK
for ( let i = 0; i < qwerty.length; i++) {
    window.addEventListener("keyup", f => {
        if (f.key == qwerty[i].innerHTML) {
        game.handleInteraction(qwerty[i]);
    }
    });
}

    