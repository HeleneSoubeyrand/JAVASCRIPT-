var randomWordFR() = require("random-word-fr")
var prompt = require("prompt");

var mysteryWord = ""
var guesses = []
var solution = []
var attempt = 0

// Computer's choice
while (mysteryWord.length === 5) {
    mysteryWord = randomWordFR()
    mysteryWord = mysteryWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

prompt.start()


// function jeu
function play() {
    prompt.get ({ name: "input", description: "Donnez une lettre"}, function (err, res) { 
       attempt = attempt + 1
       guesses.push(res.input)

       solution = mysteryWord.split("").map(function(letter) {
        if (attempt === 10 ) {
            console.log("Vous avez perdu !")
        } else (guesses.includes(letter)) {
            // includes verifie que les éléments sont dans le tableau
            return letter
        } else {
            return "_"
        }

       }) 

       
        if (solution.join("") === mysteryWord) {
                console.log("Vous avez gagné !")
        } 
        if () {
            console.log(`oups... plus que ${attempt} chances !`) 
            attempt = attempt + 1
            play()
        } 
    })
}

play()


