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
        this.activePhrase.checkLetter();
    }
    checkForWin() {
        let letter = document.getElementsByClassName("letter");
        // let result = false;
        // for (let i = 0; i < letter.length; i++) {
        //     if (letter[i].classList.contains("show")) {
        //         result = true;
        //     } else {
                
        //     }
        // }
        let result = letter.every( e  => e.classList.contains("show"));
        console.log(result);
    }
}