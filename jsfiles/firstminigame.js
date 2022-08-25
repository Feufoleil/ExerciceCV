function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// blabla
function initialisation () { 
var symbols = ["🔅", "🌙", "✨"] ;
document.getElementById("firstbutton").innerHTML= symbols[getRandomInt(3)] ;
document.getElementById("secondbutton").innerHTML = symbols[getRandomInt(3)] ;
document.getElementById("thirdbutton").innerHTML = symbols[getRandomInt(3)] ;
}
initialisation();
function moveicons(button) { 
if (document.getElementById(button).innerHTML == "🔅") {
    document.getElementById(button).innerHTML = "🌙" ;
}
else if (document.getElementById(button).innerHTML == "🌙") {
        document.getElementById(button).innerHTML = "✨" ;
}
else if (document.getElementById(button).innerHTML == "✨") {
        document.getElementById(button).innerHTML = "🔅" ;
}
if (document.getElementById("firstbutton").innerHTML == "🌙" && 
        document.getElementById("secondbutton").innerHTML == "✨" && 
        document.getElementById("thirdbutton").innerHTML == "🔅" ) { 
        document.getElementById("winthefirstgame").innerHTML  = " <img src = 'https://i.pinimg.com/originals/6e/62/e1/6e62e12817d7c868de3294619c81a61a.gif'> " ;
        const box = document.getElementById('threebuttons')
        box.style.display = 'none';
        }
}