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
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        console.log(myArray[index_1].text);
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check'" + todosChecked[index_1] + "><i class='fas fa-check'></i></span>"
            + todosText[index_1] +
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
    counterDOMElement.innerHTML = todosText.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        todosText.push(inputDOMElement.value);
        todosChecked.push(false);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todosChecked[index] = !todosChecked[index];
    drawListToDOM();
}
function deleteTodo(index) {
    todosText.splice(index, 1);
    todosChecked.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=test.js.map