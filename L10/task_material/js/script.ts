/**Aufgaben: 1.Statt zwei ToDo-Arrays, nur noch EIN Array
 *           2.To-Do Objekte benutzen
 *           3.Ein neuer To-Do-Eintrag soll am Anfang statt am Ende hinzugefügt werden
 *           4.Weitere zwei Counter, einer "Done", der andere "Open"
 *           5.Artyom, Baby!
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
var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var recordButtonDOMElement: HTMLElement;

window.addEventListener("load", function (): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    recordButtonDOMElement = document.querySelector("#recordButton");
    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < myArray.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + myArray[index].checked + "'><i class='fas fa-check'></i></span>"
            + myArray[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = myArray.length + " in total";
    let openCount = 0;
    let doneCount = 0;
    for (let index: number = 0; index < myArray.length; index++) {
        //*console.log(doneCount , openCount);
        if (myArray[index].checked == false) {
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
};

//Counter mit Filter
//myArray.filter(checked => checked.param1 == true).length

function addTodo(): void {
    if (inputDOMElement.value != "") {
        myArray.unshift({                      /*myArray.unshift("Met" , false) : ToDo? */
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }


}

function toggleCheckState(index: number): void {
    myArray[index].checked = !myArray[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    myArray.splice(index, 1);
    drawListToDOM();
}

//Artyom-Funktion

declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["Erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            myArray.unshift({                  
                text: wildcard,
                checked: false
            });
            drawListToDOM();
        }
    });

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();

    recordButtonDOMElement.addEventListener("onclick", function (): void {
        startContinuousArtyom;
    });
});

