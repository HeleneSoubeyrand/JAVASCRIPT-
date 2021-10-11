// 01 - Object 
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat)

if (cat.isCute === true) {
    // Pas besoin de préciser true ! (cat.isCute) suffit sinon true === true 
    console.log("So Cute !")
}


// 02 - Combine
var cat2 = {
    name: "Helene",
    age: 96,
    isCute: false,
}
    // Créer une variable cats qui contient un tableau contenant les variables cat et cat2
var cats = [cat, cat2]
console.log(cats)

    // Afficher la valeur de "age" de cat et de isCute de cat2 
console.log(cat.age)
console.log(cat2["isCute"])


// 03 - Even
function checkIfEven(num) {

    // Afficher "even" si num est pair, "odd" si il est impair
    if(num % 2 === 0) {
        console.log("even")
    // } else if (num % 2 !== 0) { 
        // Un modulo les seules valeurs sont 0 ou 1 donc pas besoin de "else if" mais else tout seul
    } else {
        console.log("odd")
    }
}
    // Appelez votre fonction avec des chiffres différents comme argument pour vérifier les résultats
checkIfEven(13) 
checkIfEven(168) 


// 04 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`)
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`)
    } else {
        console.log("both are same")
    }
}
compare(28, 26)
compare(228.5, 26.7)


// 05 - Add Up
function addUp(num) {
    var total = 0
     // si on appelle variable total= 0 dans la boucle, ça remet à zero à chaque fois ! 

    for (i = 1; i <= num; i++) { 
        total = total + i 
    }  

    console.log(total) 
}
addUp(12)  


console.log("")
console.log("")



// 06 - Time
function format(num) {
    var heure = 0
    var minute = 0
    var seconde = 0 

    heure = Math.floor(num / 3600) 
    num = num % 3600
    minute = Math.floor(num / 60)
    seconde = Math.floor(num % 60)
  
    console.log(`${heure} : ${minute} : ${seconde}`)
}
format(3945) 

// autre option d'affichage du résultat : 
    // return `${heure} : ${minute} : ${seconde}`  dans la function 
    // puis var result = format(3700)
    // puis console.log(result)

// autre option pour afficher avec des boucles  


// Bonus 1
 function generatePassword(num) {
     var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

     if (num < 6 || num > 15) {
     return "Error"    
    } else {
        var min = 65
        var max = 90
        var mdp = ""
    }
}

    // ".fromCharCode()" => renvoie au ASCII  