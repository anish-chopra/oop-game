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
        document.querySelector("ul").innerHTML = "";
        document.querySelectorAll(".key").forEach(element => element.classList.remove("chosen"));
        document.querySelectorAll(".key").forEach(element => element.classList.remove("wrong"));
        document.querySelectorAll("img").forEach(image => image.src = "../images/liveHeart.png");
        document.getElementById("overlay").style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
        this.activePhrase.checkLetter2();
    }
    checkForWin() {
        let letter = Array.from(document.getElementsByClassName("letter"));
        let result = letter.every( e  => e.classList.contains("show"));
        return result;
    }
    removeLife() {
        if (this.missed < 4) {
        let img = document.querySelectorAll("img");
        img[this.missed].src = "../images/lostHeart.png"
        this.missed = this.missed + 1;
        } else {
        this.gameOver();
        }
    }
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
    handleInteraction(button){
        if (this.activePhrase.checkLetter2(button.innerHTML)) {
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