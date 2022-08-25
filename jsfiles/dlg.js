var currentdlg = "dlg1";
document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;

document.getElementById("dlgbutton").onclick = function() {
        if(currentdlg == "dlg1" ) {
                currentdlg = "dlg2" ;
        }
        else if (currentdlg == "dlg2") {
                       currentdlg = "dlg3" ;
                } 
        else if (currentdlg == "dlg3") {
                        currentdlg = "dlg4" ;
        }
        else if (currentdlg == "dlg4") {
                        currentdlg = "dlg5" ;
        }
        else if (currentdlg  == "dlg5") {
                        currentdlg = "dlg6"
        }
        else if (currentdlg == "dlg6") {
                        currentdlg = "dlg7"
        }
        else if (currentdlg == "dlg7") {
                        currentdlg = "dlg8";
                        document.getElementById("pseudouser").style.display = "block";
                        document.getElementById("imputuser").value = null
        }
        else if (currentdlg == "dlg8" && document.getElementById("imputuser").value) {
                document.getElementById("pseudouser").style.display = "none";
                var pseudo = document.getElementById("imputuser").value ;
                        currentdlg = "dlg9" ;
                        dlgs["dlg9"] = dlgs["dlg9"] + pseudo + '."' ;
                        
        }
        else if (currentdlg == "dlg9") {
                currentdlg = "dlg10"
        }
        else if (currentdlg == "dlg10") {
                currentdlg = "dlg11"
        }
        else if (currentdlg == "dlg11") {
                currentdlg = "dlg12" 
        }
        else if (currentdlg == "dlg12") {
                currentdlg = "dlg13"
        }
        else if (currentdlg == "dlg13") {
                currentdlg = "dlg14"
        }
        else if (currentdlg =="dlg14") {
                currentdlg = "dlg15"
        }
        else if  (currentdlg =="dlg15") {
                currentdlg = "dlg16"
        }
        else if (currentdlg == "dlg16") {
                currentdlg = "dlg17"
        }
        else if (currentdlg == "dlg17") {
                currentdlg = "dlg18"
        }
        else if (currentdlg == "dlg18") {
                currentdlg = "dlg19"
        }
        else if (currentdlg == "dlg19") {
                currentdlg = "dlg20" ;
                document.getElementById("threebuttons").style.display = "block"
        }
        else if (currentdlg =="dlg20" && document.getElementById("firstbutton").innerHTML == "🌙" && 
        document.getElementById("secondbutton").innerHTML == "✨" && 
        document.getElementById("thirdbutton").innerHTML == "🔅") {
                document.getElementById("winthefirstgame").style.display = "none";
                currentdlg = "dlg21"
        }
        else if (currentdlg =="dlg21") {
                currentdlg = "dlg22"
        }
        else if (currentdlg == "dlg22") {
                currentdlg  = "dlg23"
        }
        else if (currentdlg == "dlg23") {
                currentdlg = "dlg24"
        }
        else if (currentdlg == "dlg24") { 
                currentdlg = "dlg25"
        }
        else if (currentdlg == "dlg25") {
                currentdlg = "dlg26"
        }
        else if (currentdlg == "dlg26") {
                currentdlg = "dlg27";
                document.getElementById("yesorno").style.display = "block" ;
                document.getElementById("dlgbutton").style.display = "none"
        }
        else if (currentdlg == "dlg28") {
                currentdlg = "dlg29"
        }
        document.getElementById("dlgtext").innerHTML = dlgs[currentdlg] ;
        }  

        function yes() {
                document.getElementById("dlgbutton").style.display = "initial" ;
                document.getElementById("yesorno").style.display = "none";
                currentdlg = "dlg28";
        }
        