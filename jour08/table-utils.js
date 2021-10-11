var multiply = require("./multiply.js") 

function addition(num4) {
    for (i = 1; i <= 10; i++) { 
        var resultat = num4 + i
        console.log(`${i} + ${num4} = ${resultat}`)
    }
}

console.log(addition(parseInt(process.argv[3])))

module.exports = {
    multiply,
    addition,
}

