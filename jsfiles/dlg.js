document.getElementById("dlgtxt").innerHTML = "Un vent glacial s’empare soudainement de vous, tandis qu’une voix grave émane de l'intérieur du temple." ;
var dlgmodif;
document.getElementById("dlgbutton").onclick = function() {
       document.getElementById("dlgtxt").innerHTML =  dlgmodif; 
        if(dlgmodif = "Un vent glacial s’empare soudainement de vous, tandis qu’une voix grave émane de l'intérieur du temple." ) {
                dlgmodif = "Cela faisait longtemps que nous n’avions pas eu de visites en ces lieux." ;
        }
        else if (dlgmodif = "Cela faisait longtemps que nous n’avions pas eu de visites en ces lieux.") {
                       dlgmodif = "wsh." ;
                }
        }  
