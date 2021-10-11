
// Stone = 1
// Paper = 2
// Scissors = 3


var random = 0 
var IaSign = document.getElementById("IA-Sign");
var RPSign = document.getElementById("RP-Sign")

var IaScore = 0
var RpScore = 0
var round = 0

RpScoreTxt = document.createElement("h1");
var element = document.getElementById("RpScore");
element.appendChild(RpScoreTxt);

IaScoreTxt = document.createElement("h1");
var element = document.getElementById("IaScore");
element.appendChild(IaScoreTxt);

RoundTxt = document.createElement("h2");
var element = document.getElementById("RoundTxt");
element.appendChild(RoundTxt);

var message = document.createElement("h1");
var element = document.getElementById("message");
element.appendChild(message);

var btnReplay = document.createElement("button");
var element = document.getElementById("btnReplay")
element.appendChild(btnReplay);



var iStone = document.createElement("IA-Sign");
iStone.setAttribute ("src", "image/imgStone.png")
var iPaper = document.createElement("IA-Sign");
iPaper.setAttribute ("src", "image/imgPaper.png")
var iScissors = document.createElement("IA-Sign");
iScissors.setAttribute ("src", "image/imgScissors.png")



var imgArray = ["iStone", "iPaper", "iScissors"]



// Random

function onButtonClick(num) {

    rpChoice(num)

    IaTimer()
   
    random = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    
    if (random === 1) {    
       IaSign.setAttribute ("src", "image/imgStone.png")
       console.log("The IA choose Stone")
    } else if (random === 2) { 
        IaSign.setAttribute ("src", "image/imgPaper.png")
        console.log("The IA choose Paper")
    } else {
        IaSign.setAttribute ("src", "image/imgScissors.png")
        console.log("The IA choose Scissors")
    }  

    game(num)

    console.log(imgArray)

}



// Affichage choix Real Player

function rpChoice(num) {

    if (num === 1) {
        RPSign.setAttribute("src", "image/imgStone.png")
        console.log("You choose Stone")

    } else if (num === 2) {
        RPSign.setAttribute ("src", "image/imgPaper.png")
        console.log("You choose Paper")
       
    } else {
        RPSign.setAttribute ("src", "image/imgScissors.png")
        console.log("You choose Scissors")
        
    }
}


// Game

function game(num) {

    if ((round === 5 && IaScore < 3 && RpScore < 3 ) || (RpScore === 3) || (IaScore === 3)) {
        round = 0
        IaScore = 0 
        RpScore = 0
    }

        if (random === num) {
            console.log("Nobody win")
            IaScore = IaScore + 0
            RpScore = RpScore + 0
        
        } else if  ((random === 1 && num === 2) || (random === 2 && num === 3) || (random === 3 && num === 1)) { 
            console.log("You win !")
            RpScore = RpScore + 1
            
        } else {
            console.log("You loose !")
            IaScore = IaScore + 1   
        }   
        
        round = round + 1
        console.log(round)

  
    RpScoreTxt.innerHTML = RpScore 
    IaScoreTxt.innerHTML = IaScore
    RoundTxt.innerHTML = `Round ${round}/5`
    

    if (round === 5 && IaScore < 3 && RpScore < 3 ) {
        message.innerHTML = 'Nobody win'
        btnReplay.innerHTML = 'Try again ?'

    } else if (RpScore === 3) {
        message.innerHTML = 'You win !'
        btnReplay.innerHTML = 'Try again ?'

    } else if (IaScore === 3) {
        message.innerHTML = 'You loose !'
        btnReplay.innerHTML = 'Try again ?'

    } else {
        message.innerHTML = ''
        btnReplay.innerHTML = ''
    }

}

var Timer = setInterval(IaTimer, 100 );

function IaTimer() {
    var imgTimer = document.getElementById("Ia-Sign");
        imgTimer = imgArray

        console.log(imgTimer)

    if (imgArray[0]) {
        imgArray [1]
    } else if (imgArray[1]) {
        imgArray[2]
    } else {
       imgArray[0]
    }
}

function StopTimer() {
    clearInterval(IaTimer, 300);
}