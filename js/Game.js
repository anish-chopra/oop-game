/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['blessing in disguise', 'dime a dozen', 'bite the bullet', 'beat around the bush', 'pull yourself together'];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        let arrayLength = this.phrases.length;
        let randomPhrase = this.phrases[(Math.floor(Math.random() * arrayLength))];
        let newPhrase = new Phrase(randomPhrase);
        return newPhrase
    }
    startGame() {
        document.getElementById("overlay").style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
        console.log(this.activePhrase.phrase.split(" ").join("").length);
        this.activePhrase.checkLetter();
    }
    checkForWin() {
        let letter = Array.from(document.getElementsByClassName("letter"));
        let result = letter.every( e  => e.classList.contains("show"));
        return result
    }
    removeLife() {
        let img = document.querySelectorAll("img");
        img[this.missed].src = "../images/lostHeart.png"
        this.missed = this.missed + 1;
        if (this.missed == 5 || this.checkForWin()) {
        this.gameOver();
        }
    }
    gameOver() {
        if (this.missed == 5) {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("game-over-message").innerHTML = "You Lose!"
        document.getElementById("overlay").classList.remove("start");
        document.getElementById("overlay").classList.add("lose");
    } else if (this.checkForWin()) {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("game-over-message").innerHTML = "You Win!"
        document.getElementById("overlay").classList.remove("start");
        document.getElementById("overlay").classList.add("win");
    }
    }
}