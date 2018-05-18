window.onload = function() {
    var name;
    document.getElementById("enterName").onclick = function() {
        name = document.getElementById("casillaNombre").value;
        if(name == ""){
            document.getElementById("warningMessage").innerText = "Tienes que escribir tu nombre para jugar";

        }
    }
}