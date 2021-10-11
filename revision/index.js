
// 01 - Alphabet 
function sortLetters(string) {
    var array = string.split("")
    array.sort()

    return array.join("")     
}
var sortAlpha = sortLetters("konexio")
console.log(sortAlpha) 


// 02 - XOXO 
function countEach(xoxo) {
    var comptO = 0
    var comptX = 0
    // attention à mettre la variable en dehors de la boucle sinon il compte 0 à chaque début de boucle
    
 for (var i = 0; i < xoxo.length; i++) {
     console.log(xoxo[i])

     if (xoxo[i] == "o") {
        comptO = comptO + 1   // = compt0 ++ 
     } else if (xoxo[i] == "x") {
        comptX = comptX + 1
     }
}
    console.log(comptO)
    console.log(comptX)

    if (comptO == comptX) {
        console.log("true")
    } else {
        console.log("false")
    }

}
countEach("xxxooooxx")
 

// 03 - Palindrome 
function checkPal(string) {
    var reverseString = string.split("")
        reverseString = reverseString.reverse()
        reverseString = reverseString.join("")
        console.log(reverseString)

    if (string == reverseString) {
        console.log("Palindrome !")
    } else {
        console.log("Nope")
    }

}
checkPal("laptop")



// 04 - Swap 
function swap(string) {
    var sentence = ""
    for (var i = 0; i < string.length; i++) {

        if (string[i] == string[i].toLowerCase()) {
            console.log(string[i].toUpperCase())
            sentence = sentence + string[i].toUpperCase()
            
        } else {
            console.log(string[i].toLowerCase())
            sentence = sentence + string[i].toLowerCase()
        }
    }
    console.log(sentence)
}
swap("HEllo WorlD")


// Bonus 
function makeItSpongeBob(string) {
    var sentence2 = ""

    for (var i = 0; i < string.length; i+=2) {
        console.log(string[i].toUpperCase())
    }
    console.log(sentence2)

}

makeItSpongeBob("Javascript is easy")