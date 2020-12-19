//Gesamtanzahl der To-Do´s: Stand 0
let amount: number = 0;

//Input Feld - generiert ein neues To-Do mit der Enter-Taste
const inputField: HTMLInputElement = (document.getElementById ("inputField") as HTMLInputElement);

inputField.addEventListener ("keypress", function (e: KeyboardEvent): void {
    if (inputField.value != "" && e.key == "Enter"){
        createTask();
        inputField.value = ""; //Damit das Inputfeld wieder leer wird sobald ein To-Do erstellt wird
    }
});

//Add Button - generiert ein neues To-Do mit dem "Add" Button
document.getElementById("addButton").addEventListener ("click", function(): void {  //warum addEventListener auf Null bei "byClass" oder "querySelector"
    if (inputField.value != "") {
    createTask ();
    inputField.value = ""; //Hier gilt das gleiche wie oben!
}});

//durch das drücken auf den ADD Button soll nun das neue To-Do hinzugefügt werden:
function createTask(): void {
    var myTask: HTMLDivElement = document.createElement ("div"); //das jeweilige Div, indem sich:..
    myTask.className = "task";
    let myTick = document.createElement ("input");//..die Checkbox,.. 
    myTick.type = "checkbox";
    let myLabel: HTMLLabelElement = document.createElement ("label");//..der neue Task,..
    myLabel.innerHTML = inputField.value;
    var trashButton: HTMLElement = document.createElement ("i");//..sowie der Müll-Button befinden
    trashButton.className = "fas fa-trash-alt";
    //Trash-Button löscht das entsprechende To-Do - muss innerhalb Funktion sein da "myTask" lokale deklarierte Variable!
    trashButton.addEventListener ("click", function(): void {
        myTask.remove();
        amount--;
        showAmount();
    });

    //Vorgang, wie alles verschachtelt wird
    document.getElementById ("todoList").appendChild (myTask)
    myTask.appendChild(myTick); //"myTask" statt "document.get.." weil ".appendChild" sonst spinnt!
    myTask.appendChild(myLabel); // ..spinnt immer noch!
    myTask.appendChild(trashButton); // .. no comment!

    //Task-Zähler wird mit jedem generierten To-Do höher
    amount++;
    showAmount();
};

//Das DOM wird manipuliert und die aktuelle Anzahl der To-Do´s wird angezeigt
function showAmount (): void {
    document.getElementById("amount").innerHTML = `${amount} Total Tasks`;
};

//Alle Elemente auf einmal löschen
document.getElementById("deleteAll").addEventListener ("click", function (): void {
    document.getElementById("todoList").innerHTML = "";
    amount = 0;
    showAmount();
});









    