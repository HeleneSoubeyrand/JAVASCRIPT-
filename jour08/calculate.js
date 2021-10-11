// 01 - Calculator 

function calculate(num1, num2, ope) {

    console.log(typeof num1)
    console.log(typeof num2)

    if (ope === "+" ) {
        console.log(num1 + num2)

    } else if (ope === "-" ) {
        console.log(num1 - num2)

    } else if (ope === "x" ) {
        console.log(num1 * num2) 

    } else if (ope === "/" ) {
        console.log(num1 / num2)

    } else if (ope === "%" ) {
        console.log(num1 % num2) 

    } else {
        console.log("error") 
    }
   
}

// pour enlever 2 premiers parametres
var parameters = process.argv.slice(2) 
// rentrer tous les paramètres 
var parameter1 = parseInt(parameters[0])
var parameter2 = parseInt(parameters[1])
var parameter3 = parameters[4]

calculate(parameter1, parameter2, parameter3)

// version console.log
// console.log(calculate(parseInt(process.argv[2]),parseInt(process.argv[3]),process.argv[4]))
// var result = ... et return result 

