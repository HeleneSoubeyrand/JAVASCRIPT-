// 02 - Table
function multiply(num3) {

    for (i = 1; i <= 10; i++) { 
        var resultat = num3 * i
        console.log(`${i} x ${num3} = ${resultat}`)
    }
        
}

var parameters = process.argv.slice(2) 
var parameter = parseInt(parameters[0])

if (parameters.length === 0) {
    console.log("Error")
} else {
    
}

multiply(parameter)

// console.log(multiply(parseInt(process.argv[2])))


module.exports = {
    multiply,
}
 





