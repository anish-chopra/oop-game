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
            let missedLetter = true;
            let qwerty = document.getElementsByClassName("key");
            for (let i = 0; i < qwerty.length; i++) {
                qwerty[i].addEventListener("click", e => {
                    for (let k = 0; k < this.phrase.length; k++) {
                        if (e.target.innerHTML === this.phrase[k]) {
                            // this.showMatchedLetter(e.target.innerHTML)
                            missedLetter = false;
                        } 
                    }
                    if (missedLetter === false) {
                        // console.log("true");
                        missedLetter = true;
                        return true;
                    } else {
                        // console.log("false");
                        missedLetter = true;
                        return false;
                    }
                })
            }
        }
        checkLetter2(letter) {
            let missedLetter = false;
            for (let i = 0; i < this.phrase.length; i++) {
                if (letter == this.phrase[i]) {
                    missedLetter = true;
                } 
            }
            if (missedLetter) {
                return true
            } else {
                return false;
            }
        }
        showMatchedLetter(letter) {
            let phraseLetter = document.getElementsByClassName("letter");
            for (let i = 0; i < phraseLetter.length; i++) {
                if (letter == phraseLetter[i].innerHTML) {
                    phraseLetter[i].classList.add("show");
                }
            }
        }
}