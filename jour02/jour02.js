// 01 - Number
var integer = 102
var float = 13.9
console.log(integer)
console.log(float)

// 02 - Convert
var basic = 34
var stringified = basic.toString()
console.log(typeof stringified)
console.log(stringified)

// 03 - Round
var num = 1.5
var rounded = Math.round(num)
console.log(rounded)

// 04 - Arithmetique
var test = 12
var bis = 5
console.log(test + bis)
console.log(test - bis)
console.log(test * bis)
console.log(test / bis)
console.log(test ** bis)
console.log(test % bis)

// 05 - Comparaison
var test = 143 
var bis = 219 
console.log(test > bis)
console.log(test < bis)
console.log(test >= bis)
console.log(test <= bis)
console.log(test == bis)
console.log(test === bis)
console.log(test != bis)
console.log(test !== bis)

// 06 - Condition
var limit = 50 
var score = 25 
if(score >= limit) {
    console.log("Ok good!")
} else {
    console.log("Oh nooo...")
}

// 07 - Condition II
var password = "azerty"
if (password.length > 5) {
    console.log("The password is secure")
} else {
    console.log("The password is insecure")
}

// 08 - Condition III
if (password.length > 5 && score >= limit){
    console.log("Everything is good")
} else if (password.length > 5 || score >= limit) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// Bonus
var min = 1
var max = 6
var random = Math.floor(Math.random() * (max - min +1 ) + min)
    console.log(random)

if (random === 6) {
    console.log("Yes I win")
} else {
    console.log("So close...")
}

// Bonus II
var month = "July"
switch (month) {
    case "December" :
    case "January" :
    case "February" :
        console.log("Winter")
        break;
    case "March" :
    case "April" :
    case "May" :
        console.log("Spring")
        break;
    case "June" :
    case "July" :
    case "August" :
        console.log("Summer")
        break;
    case "September" :
    case "October" :
    case "November" :
        console.log("Fall")
        break;

        default :
        console.log("That's not a season");
}

// Bonus III
var roundedNumber = 3.1
var float = Math.ceil(roundedNumber) - roundedNumber
console.log(float)

if (float <= 0.5) {
    console.log(Math.ceil(roundedNumber))
} else {
    console.log(Math.floor(roundedNumber))
}


