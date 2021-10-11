// 01

var fruits = ["mango", "lemon", "blueberry"]
console.log(fruits)
console.table(fruits)


// 02 - Access

var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))


// 03 - Add and Remove

var objects = ["pen", "book", "lamp"]

objects.unshift("chair")
console.log(objects)
objects.pop(2)
console.log(objects)
objects.push("laptop")
console.table(objects)
objects.shift()
console.log(objects)


// 04 - Order

var numbers = [4, 10, 8, 12, 6]

numbers.reverse()
console.log(numbers)

numbers.sort((a,b) => a-b)
console.log(numbers)

// Sens inverse
 // numbers.sort((a,b) => b-a)
 // console.log(numbers)


// 05 - Boucle

var total = 0 
var limit = 10

// Pour les tableaux partir toujours de 0 et prendre strictement supérieur < (sauf ici)

for (var i = 0; i <= limit; i ++) {
    var total = total + i 
}
    console.log(total)


// 06 - Reverse

var sentence = "Hello Konexio!"
// Créer un tableau contenant chaque lettre 
var letters = sentence.split("")
console.log(letters)
// Créer le nouveau tableau qui sera appelé dans la boucle
var result = []

// Créer la boucle pour afficher le décompte du nombre de caractère de la phrase 
for (var i = sentence.length -1 ; i >= 0; i--) {
    // afficher les lettres au lieu des chiffres (= au lieu des index)
    console.log(letters[i])
    // intégrer les lettres=i dans le tableau
    result.push(letters[i])
}

// transformer le tableau en string 
console.log(result.join(""))


// Bonus 1

var finish = 100;

for (var i = 0; i <= finish; i++) {
 
if (i % 3 === 0 && i % 5 === 0)  {
    console.log("fizzbuzz")
    // console.log(`${i} fizzbuzz`) => pour afficher le résultat avant ! 
} else if (i % 3 == 0) {
    console.log("fizz")
} else if (i % 5 == 0)  {
    console.log("buzz")
} else if (i % 7 === 0)  {
    console.log("")
} else {
    console.log(i)
}

}

// Bonus 2

var start = 0 

while (start <= finish) {

    if (start % 3 === 0 && start % 5 === 0)  {
        console.log("fizzbuzz")
    } else if (start % 3 == 0) {
        console.log("fizz")
    } else if (start % 5 == 0)  {
        console.log("buzz")
    } else if (start % 7 === 0)  {
        console.log("")
    } else {
        console.log(start)
    }
// Mettre opération à la fin quand il y a "while" !! 
 start ++
}


// Bonus 3

var promo = ["Marco", "Evan", "Alin", "Salwa", "Jeremy", "Kevin", "Jong", "Hanaa", "Eloi"]
var student = promo[Math.floor(Math.random() * promo.length)]

console.log(student)

// var student = Math.floor(Math.random(promo) * promo.length)

// console.log(student[promo])


// Bonus 4

var array = []
var limit = 20
var max = 100

// A ne pas faire c'est caca !! 
// for ( array > 0; array.length < 20; i = Math.floor(Math.random() * (max - min + 1) + min)) {
    // array.push(i)
// }

for ( var i = 0; i < limit; i++ ) {
    var random = Math.floor(Math.random() * max)
    array.push(random)
}
console.log(array)

for ( var i = 0; i < random.length; i++ ){

}