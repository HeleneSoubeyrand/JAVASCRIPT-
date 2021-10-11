var fs = require("fs")
const { type } = require("os")

// Ajouter du contenu
fs.appendFile("jour07.txt", "name: Samantha Jones, email: sam.jonesg@example.com", function(err) {
    if(err) {
        return console.log(err)
    }
    console.log("Texte modifié ")
})

// Remplacer tout le contenu
fs.writeFile("jour07.txt", "Berenice Hubert, email: Berenice.Hub@exemple.com", function(err) {
    if(err) {
        return console.log(err)
    }
})

// Lire un fichier 
fs.readFile("jour07.txt", function (err,data) {
    console.log("lecture texte modifié " + data.toString())
})

// Supprimer un fichier 
fs.unlink("jour07.txt", function (err) {
    if(err) {
        return console.log(err)
    }
    console.log("fichier supprimé!")
})


// 02 - Map Double
var array = [1, 2, 3, 4, 5]
var double = array.map(function (number) {
    return number * 2
})
console.log(double) 


// 03 - Map Names
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function (element) {
    return { name : `${element.firstName} ${element.lastName}` }
}  
)
console.log(shortNames) 


// 04 - Filter Numbers
var array = [1, "toto", 34, "javascript", 8]
console.log(typeof array[0])

var numbers = array.filter(function(num) {
    return typeof num === "number"
})
console.log (numbers)


// 05 - Filter Even
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function(num) {
    return num % 2 === 0
})
console.log (even)


// 06 - Cakes 
var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolateCakes = cakes.filter(function(cake) {
    return cake.flavor === "chocolate"
})
.map(function(cake) {
    console.log(cake)
    return {
        name: cake.name,
        flavor: cake.flavor,
        status: "sold out"
    }
})
console.log(chocolateCakes)

