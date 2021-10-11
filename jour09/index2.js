const moment = require("moment")
moment.locale ('fr');


// 01 - Aujourd'hui

function whatDayIsToday() {
    // var day = moment().format('dddd')
    // console.log(`Aujourd'hui nous sommes ${day}`)
    // OU
    // console.log(`Aujourd'hui nous sommes ${moment().format('dddd')}`)
    console.log(moment().format("[Aujourd'hui nous sommes] dddd"))
}
whatDayIsToday()


// 02 - Mois courant 

function whatMonthIsIt() {
    var month = moment().format('MMMM')
    console.log(`Nous sommes au mois de ${month}`)
}
whatMonthIsIt()


// 03 - Format

function formatDate(dateType) {
    console.log(moment(dateType).format('L'))
}
formatDate("2021-11-09")


// 04 - Age
function calculateAge(birthday) {
    var birthday = moment().diff(moment(str), "years")
    console.log(birthday)
}
calculateAge("19870817")