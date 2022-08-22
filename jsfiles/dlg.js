document.getElementById("dlgtxt").innerHTML = "Un vent glacial s’empare soudainement de vous, tandis qu’une voix grave émane de l'intérieur du temple." ;
var dlgbuttonclicked = false;
document.getElementById("dlgbutton").onclick = function() {
        dlgbuttonclicked = !dlgbuttonclicked;
        if(dlgbuttonclicked) {
                document.getElementById("dlgtxt").innerHTML = "Cela faisait longtemps que nous n’avions pas eu de visites en ces lieux." ;
}       else {
                document.getElementById("dlgtxt").innerHTML = "hmm" ;
}    
        
}