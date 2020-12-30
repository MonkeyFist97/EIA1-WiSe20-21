/**Aufgaben: 1.Statt zwei ToDo-Arrays, nur noch EIN Array
 *           2.To-Do Objekte benutzen
 *           3.Ein neuer To-Do-Eintrag soll am Anfang statt am Ende hinzugefügt werden
 * 
*/
//--Man erstelle ein Interface mit den Eigenschaften "text" und "checked", das als einziges Array funktioniert
interface ToDos {    
    text: string;
    checked: boolean;
}

//Jetzt die Objekte in Instanzen zu Beginn der Website
var myArray: ToDos[] = [
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
}];


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function(): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < myArray.length; index++) {
        console.log(myArray[index].text);
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check'" + todosChecked[index] + "><i class='fas fa-check'></i></span>"
                            + todosText[index] +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todosText.length + " in total";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {
        todosText.push(inputDOMElement.value);
        todosChecked.push(false);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    todosChecked[index] = !todosChecked[index];
    drawListToDOM();
}

function deleteTodo(index: number): void {
    todosText.splice(index, 1);
    todosChecked.splice(index, 1);
    drawListToDOM();
}