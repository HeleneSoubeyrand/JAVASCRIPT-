// 01 - Aujourd'hui
var date = new Date()
console.log(date)

function whatDayIsToday() {
    var dayArray = ["dimanche","lundi", "mardi", "mercredi", "jeudi", "vendredi","samedi"]
    var day = dayArray[date.getDay()]
    console.log(`Aujourd'hui nous sommes ${day}`)
}
whatDayIsToday()


// 02 - Mois courant 

function whatMonthIsIt() {
    var monthArray = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]
    var month = monthArray[date.getMonth()]
    var isVowel = month === "avril" || month === "août" || month === "octobre"
    var word = isVowel
    console.log(`Nous sommes au mois de ${month}`)
}
whatMonthIsIt()


// 03 - Format

function formatDate(dateType1) {
    var date = new Date(dateType1)

    // Méthode longue 
        // var year = [date.getFullYear()]
        // var month = [date.getMonth() + 1] 
        // var day = [date.getDate()]

        // if (day < 10 ) {
        //     day =`0${day}`
        // } if (month < 10) {
        //     month = `0${month}`
        // } 
    
    console.log(`${day}/${month}/${year}`)
}
formatDate("2021-09-09")

 

// 04 - Age
function calculateAge(birthday) {
    var age = new Date() - new Date(birthday)
    var age = new Date(age)
        age = [age.getFullYear() - 1970]

}

calculateAge("1950-12-17")