window.onload = function() {
    var name;

    document.getElementById("btnGetName").onclick = function() {
        name = document.getElementById("txtName").value;
        if(name == ""){
            document.getElementById("warningMessage").innerText = "Tienes que escribir tu nombre para poder jugar";
            
        }else{
            document.getElementById("name").innerText = name;
            document.getElementById("formuGetName").style.display = "none";
            document.getElementById("formuGetGame").style.display = "block";
            document.getElementById("upperBar").style.display = "block";
            document.getElementById("warningMessage").innerText ="";
        }
    };
    document.getElementById("btnGetGame").onclick = function() {
        document.getElementById("warningMessage").innerText ="";
        if(document.getElementById("radioYes").checked == true ){
            document.getElementById("formuGetGame").style.display = "none";
            document.getElementById("formuquestion1").style.display = "block";
            

            
        }else if (document.getElementById("radioNo").checked == true ){
            document.getElementById("formuGetGame").style.display = "none";
            document.getElementById("Resultado").style.display = "block";
        }else{
            document.getElementById("warningMessage").innerText = "Tienes que elegir una opción";
        }
    };
    //¿han egresado hombres en Laboratoria?
    document.getElementById("btnGetQ1").onclick = function() {
        document.getElementById("warningMessage").innerText ="";
        if(document.getElementById("q1Yes").checked == true ){
            document.getElementById("formuquestion1").style.display = "none";
            document.getElementById("formuquestion2").style.display = "block";
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                    "<p>No han egresado hombres</p>"
                "</div>";

        }else if (document.getElementById("q1No").checked == true ){
            document.getElementById("formuquestion1").style.display = "none";
            document.getElementById("formuquestion2").style.display = "block";
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                    "<div class='answer'>" +
                        "<p>No han egresado hombres</p>"
                    "</div>";            
        }else{
            document.getElementById("warningMessage").innerText = "Tienes que elegir una opción";
        }
    };
    //¿hay laboratoria en concepción?
    document.getElementById("btnGetQ2").onclick = function() {
        document.getElementById("warningMessage").innerText ="";
        if(document.getElementById("q2Yes").checked == true ){
            document.getElementById("formuquestion2").style.display = "none";
            document.getElementById("formuquestion3").style.display = "block";
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                    "<p>No hay laboratoria en concepción</p>"
                "</div>";

        }else if (document.getElementById("q2No").checked == true ){
            document.getElementById("formuquestion2").style.display = "none";
            document.getElementById("formuquestion3").style.display = "block";
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                    "<div class='answer'>" +
                        "<p>No hay laboratoria en concepción</p>"
                    "</div>";            
        }else{
            document.getElementById("warningMessage").innerText = "Tienes que elegir una opción";
        }
    };     
    //¿la duracion del bootcamp es de 6 meses?
    document.getElementById("btnGetQ3").onclick = function() {
        document.getElementById("warningMessage").innerText ="";
        if(document.getElementById("q3Yes").checked == true ){
            document.getElementById("formuquestion3").style.display = "none";
            document.getElementById("scoreBoard").style.display = "block";
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                    "<p>Si, la duracion del bootcamp es de 6 meses</p>"
                "</div>";

        }else if (document.getElementById("q3No").checked == true ){
            document.getElementById("formuquestion3").style.display = "none";
            document.getElementById("scoreBoard").style.display = "block";
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                    "<div class='answer'>" +
                        "<p>Si, la duracion del bootcamp es de 6 meses</p>"
                    "</div>";            
        }else{
            document.getElementById("warningMessage").innerText = "Tienes que elegir una opción";
        }
    };     
    //var name = prompt("¿cuál es tu nombre?");
    //document.getElementById("name").innerText = name;
/*
    var wantToPlay = prompt("¿quieres jugar? s/n");
    if (wantToPlay.toLowerCase() == "s") {
        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
    } else {
        document.getElementById("warningMessage").innerText = "Bueno Chao";
    }
*/

}