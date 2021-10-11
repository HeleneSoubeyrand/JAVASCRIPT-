
// 1- Nombre pair
var start = 11
var limit = 47
var total = 0


for (var i = start; i < limit; i++) {
    if (i % 2 === 0) {
    
        // !! si on ne veut additionner que les chiffres qui s'affichent, il faut rester dans la condition.
        total = total + i
    }
}  
console.log (total)


console.log ("")
console.log ("")


// 2- Nombre impair
var start = 109
var limit = 588
var total = 0

// for (var i = start; i < limit; i+= 2) {
    // console.log (i)
    // total = total + i
// }
// console.log (total)

for (var i = start; i < limit; i++) {
    if (i % 2 !== 0) {
       
        total = total + i
}   
}
console.log(total)

console.log ("")
console.log ("")


// 3- Puissance et racine carrée
var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []

    // Remplir tableau squares avec puissance numbers   
for ( var i = 0; i < numbers.length; i++ ) { 
    console.log(numbers[i])
    var carre = numbers[i] * numbers[i]
    squares.push(carre)
}
console.log(squares)

  // Remplir roots avec racine carré de squares  
for ( var i = 0; i < squares.length; i++ ) { 
    console.log(squares[i])
    var racineCarre = Math.sqrt(squares[i])
    roots.push(racineCarre)
}
console.log(roots)


// 4- Table multiplication v1
var nbre = 3

for ( var i = 0; i <= 10; i++) {
console.log(`${nbre} x ${i} = ${nbre*i}`)
}

console.log ("")
console.log ("")

// 5- Table multiplication v2

// for (var i = 0; i < 11; i++) {
//     console.log(i)

//     for (var j = 0; j < 11; j++) {
//     console.log(j)
//     }
// }

for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
        // la suite va être répétée "var i" fois
        var result = i * j 
        console.log(`${i} x ${j} = ${result}`)
    }
    console.log("")
}


// 6- Factorielle v1
var fact = 7

for (var i = 1; i <= 7; i++) {
   fact = fact * i
}  
 console.log(fact)
   

 console.log ("")
 console.log ("")


 // 7- Factorielle v2

 for (var i = 0; i <= 8; i++) {
    var total = 1 
   
    for (var j = 1; j <= i; j++) { 
        total = total * j
    }

    console.log(`${i}! = ${total}`)
}

 console.log ("")
 console.log ("")


 // 8- Somme des carrés
var carre = 0

 for (var i = 5; i <= 10; i++) {
    carre = carre + i * i 
}
 console.log (carre)


 console.log ("")
 
 
// 9- Comptons
var multiple = 7 
var total = []
// var total = 0

for (var i = 100; i <=1000; i++) {
   
    if (i % multiple === 0) {
        total.push(i)
        // Solution total = total + 1 // total++ => va aditionner le nbre de réponses
    }
} 
console.log(total.length)


console.log ("")

// 10- Chanceux
var max = 6
var min = 1
var total = 0

for (var i = 0; i < 20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1) + min)

    if (random >= 5) {
        console.log(random)
        total = total + random
    } 
}
console.log(total)

