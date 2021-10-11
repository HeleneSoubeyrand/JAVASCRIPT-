// Bonus 
var prompt = require("prompt");
prompt.start()

var longueurMot = randomWord().length - 1 
var chancesMax = 10 
var chancesNum = 0

// Computer choice
var randomWord = require("random-word-fr")

// function réponse 
var answer =

// function jeu
function getWord() {
    prompt.get ({
        name: "play",
        description: "Quel est le mot mystère ?",
        replace: "_"
    },
    function (err, res) { 
        answer = res.getWord
        if (chancesNum <= chancesMax && answer === false ) {
            chancesNum = chances + 1
            console.log(`oups... plus que ${chancesNum} chances !`)
            getWord()
        } else if (chancesNum <= chancesMax && answer === true ) {
                console.log("Vous avez gagné !")
        } else if (chancesNum > chancesMax && answer === false ) {
            console.log("Vous avez perdu !")
        } 
    })
}
getWord()
console.log(chancesNum)
console.log(randomWord())