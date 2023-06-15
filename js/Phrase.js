/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = this.phrase[i];
            document.querySelector('ul').appendChild(li);
            if (li.innerHTML === " ") {
                li.className = 'space';
            }
            else {
                li.className = "letter";
            }
          }
        }
        checkLetter() {
            let qwerty = document.getElementsByClassName("key");
            for (let i = 0; i < qwerty.length; i++) {
                qwerty[i].addEventListener("click", e => {
                    for (let k = 0; k < this.phrase.length; k++) {
                        if (e.target.innerHTML == this.phrase[k]) {
                            this.showMatchedLetter(e.target.innerHTML)
                        }
                    }
                    
                })
            }
        }
        showMatchedLetter(letter) {
            let phraseLetter = document.getElementsByClassName("letter");
            for (let i = 0; i , i < phraseLetter.length; i++) {
                if (letter == phraseLetter[i].innerHTML) {
                    phraseLetter[i].classList.add("show");
                }
            }
        }
}