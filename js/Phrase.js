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
            let missedLetter = 0;
            let qwerty = document.getElementsByClassName("key");
            for (let i = 0; i < qwerty.length; i++) {
                qwerty[i].addEventListener("click", e => {
                    console.log(e.target.innerHTML)
                    for (let k = 0; k < this.phrase.split(" ").join("").length; k++) {
                        if (e.target.innerHTML == this.phrase[k]) {
                            this.showMatchedLetter(this.phrase[k])
                        }
                        // } else {
                        //     missedLetter = missedLetter + 1;
                        //     console.log(missedLetter);
                        // }
                        // if (missedLetter == this.phrase.split(" ").join("").length){
                        //     game.removeLife();
                        // }
                    }
                    missedLetter = 0;
                })
            }
        }
        showMatchedLetter(letter) {
            let phraseLetter = document.getElementsByClassName("letter");
            for (let i = 0; i < phraseLetter.length; i++) {
                if (letter === phraseLetter[i].innerHTML) {
                    phraseLetter[i].classList.add("show");
                }
            }
        }
}