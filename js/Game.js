/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('blessing in disguise'),
            new Phrase('dime a dozen'),
            new Phrase('bite the bullet'), 
            new Phrase('beat around the bush'),
            new Phrase('pull yourself together')
        ];
        this.activePhrase = null;
    }
    // THIS METHOD GETS A RANDOM PHRASE
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        let newPhrase = this.phrases[randomPhrase];
        return newPhrase
    }
    // THIS METHOD STARTS THE GAME
    startGame() {
        let keys = document.querySelectorAll(".key");
        document.querySelector("ul").innerHTML = "";
        keys.forEach(element => element.classList.remove("chosen"));
        keys.forEach(element => element.classList.remove("wrong"));
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].disabled === true) {
                keys[i].disabled = false
            }
        }
        if (document.getElementById("overlay").className === "lose") {
            document.getElementById("overlay").classList.remove("lose");
        }
        if (document.getElementById("overlay").className === "win") {
            document.getElementById("overlay").classList.remove("win");
        }
        document.querySelectorAll("img").forEach(image => image.src = "../images/liveHeart.png");
        document.getElementById("overlay").style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
        this.activePhrase.checkLetter();
    }
    // THIS METHOD WILL CHECK IF THE GAME HAS BEEN WON
    checkForWin() {
        let letter = Array.from(document.getElementsByClassName("letter"));
        let result = letter.every( e  => e.classList.contains("show"));
        return result;
    }
    // THIS METHOD WILL REMOVE A LIFE/HEART WHEN AN INCORRECT LETTER IS GUESSED
    removeLife() {
        if (this.missed < 4) {
        let img = document.querySelectorAll("img");
        img[this.missed].src = "../images/lostHeart.png"
        this.missed = this.missed + 1;
        } else {
        this.gameOver();
        }
    }
    // THIS METHOD RUNS WHEN THE GAME IS OVER
    gameOver() {
        if (this.missed >= 4) {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("game-over-message").innerHTML = "You Lose!"
        document.getElementById("overlay").classList.remove("start");
        document.getElementById("overlay").classList.add("lose");
    } else {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("game-over-message").innerHTML = "You Win!"
        document.getElementById("overlay").classList.remove("start");
        document.getElementById("overlay").classList.add("win");
    }
    }
    // THIS METHOD HANDLES ALL THE METHODS AND PUTS THE GAME TOGETHER
    handleInteraction(button){
        if (this.activePhrase.checkLetter(button.innerHTML)) {
            this.activePhrase.showMatchedLetter(button.innerHTML);
            button.classList.add("chosen");
            button.disabled = "true";
        } else {
            button.classList.add("wrong");
            this.removeLife();
            button.disabled = "true";
        }
        if (this.checkForWin()) {
            this.gameOver();
        }
    }
}