//Jetzt die Objekte in Instanzen zu Beginn der Website
var myArray = [
    {
        text: "Lorem",
        checked: true
    },
    {
        text: "Ipsum",
        checked: false
    },
    {
        text: "Dolor",
        checked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openDOMElement;
var doneDOMElement;
var recordButtonDOMElement;
//window.addEventListener("load", function (): void {
inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");
openDOMElement = document.querySelector("#open");
doneDOMElement = document.querySelector("#done");
recordButtonDOMElement = document.querySelector("#recordButton");
addButtonDOMElement.addEventListener("click", addTodo);
drawListToDOM();
//});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + myArray[index_1].checked + "'><i class='fas fa-check'></i></span>"
            + myArray[index_1].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index_1 = 0; index_1 < myArray.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = myArray.length + " in total";
    var openCount = 0;
    var doneCount = 0;
    for (var index_2 = 0; index_2 < myArray.length; index_2++) {
        //*console.log(doneCount , openCount);
        if (myArray[index_2].checked == false) {
            openCount++;
            //*console.log(openCount);
        }
        else {
            doneCount++;
            //*console.log(doneCount);
        }
        //*console.log(doneCount , openCount);
        openDOMElement.innerHTML = openCount + " open";
        doneDOMElement.innerHTML = doneCount + " done";
    }
}
;
//Counter mit Filter
//myArray.filter(checked => checked.param1 == true).length
function addTodo() {
    if (inputDOMElement.value != "") {
        myArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    myArray[index].checked = !myArray[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    myArray.splice(index, 1);
    drawListToDOM();
}
var artyom = new Artyom();
artyom.addCommands({
    indexes: ["Erstelle Aufgabe *"],
    smart: true,
    action: function (i, wildcard) {
        myArray.unshift({
            text: wildcard,
            checked: false
        });
        drawListToDOM();
    }
});
function startArtyom() {
    artyom.initialize({
        lang: "de-DE",
        continuous: true,
        listen: true,
        interimResults: true,
        debug: true
    }).then(function () {
        console.log("Ready!");
    });
}
;
function stopArtyom() {
    artyom.fatality();
}
;
document.getElementById("recordButton").addEventListener("click", function () {
    if (document.getElementById("recordButton").getAttribute("class") == "fas fa-microphone") {
        document.getElementById("recordButton").setAttribute("class", "fas fa-microphone active");
        startArtyom();
    }
    else if (document.getElementById("recordButton").getAttribute("class") == "fas fa-microphone active") {
        document.getElementById("recordButton").setAttribute("class", "fas fa-microphone");
        artyom.fatality();
    }
});
//# sourceMappingURL=script.js.map