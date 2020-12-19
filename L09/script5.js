//Gesamtanzahl der To-Do´s: Stand 0
var amount = 0;
//Input Feld - generiert ein neues To-Do mit der Enter-Taste
var inputField = document.getElementById("inputField");
inputField.addEventListener("keypress", function (e) {
    if (inputField.value != "" && e.key == "Enter") {
        createTask();
        inputField.value = ""; //Damit das Inputfeld wieder leer wird sobald ein To-Do erstellt wird
    }
});
//Add Button - generiert ein neues To-Do mit dem "Add" Button
document.getElementById("addButton").addEventListener("click", function () {
    if (inputField.value != "") {
        createTask();
        inputField.value = ""; //Hier gilt das gleiche wie oben!
    }
});
//durch das drücken auf den ADD Button soll nun das neue To-Do hinzugefügt werden:
function createTask() {
    var myTask = document.createElement("div"); //das jeweilige Div, indem sich:..
    myTask.className = "task";
    var myTick = document.createElement("input"); //..die Checkbox,.. 
    myTick.type = "checkbox";
    var myLabel = document.createElement("label"); //..der neue Task,..
    myLabel.innerHTML = inputField.value;
    var trashButton = document.createElement("i"); //..sowie der Müll-Button befinden
    trashButton.className = "fas fa-trash-alt";
    //Trash-Button löscht das entsprechende To-Do - muss innerhalb Funktion sein da "myTask" lokale deklarierte Variable!
    trashButton.addEventListener("click", function () {
        myTask.remove();
        amount--;
        showAmount();
    });
    //Vorgang, wie alles verschachtelt wird
    document.getElementById("todoList").appendChild(myTask);
    myTask.appendChild(myTick); //"myTask" statt "document.get.." weil ".appendChild" sonst spinnt!
    myTask.appendChild(myLabel); // ..spinnt immer noch!
    myTask.appendChild(trashButton); // .. no comment!
    //Task-Zähler wird mit jedem generierten To-Do höher
    amount++;
    showAmount();
}
;
//Das DOM wird manipuliert und die aktuelle Anzahl der To-Do´s wird angezeigt
function showAmount() {
    document.getElementById("amount").innerHTML = amount + " Total Tasks";
}
;
//Alle Elemente auf einmal löschen
document.getElementById("deleteAll").addEventListener("click", function () {
    document.getElementById("todoList").innerHTML = "";
    amount = 0;
    showAmount();
});
//# sourceMappingURL=script5.js.map