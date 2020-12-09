/*var ersterWert: number = 8 + 6;
var A:number = 13;
var B:number = 14;
var C:number = 15;


switch (ersterWert) {
    case A:
        console.log('Antwort A');
        break;
    case B:
        console.log('Antwort B');
        break;
    case C:
        console.log('Antwort C');
        break;
    default:
        console.log('Keins von allen');
}

//if-else-form

if (ersterWert == A){
    console.log('Antwort A');
} else if (ersterWert == B){
    console.log('Antwort B')
} else if (ersterWert == C){
    console.log('Antwort C');
} else {  
    console.log('Keins von allen')
}*/

var button: HTMLElement = document.querySelector ('button');

button.addEventListener ('click' , function (){
    if (button.classList.contains ('potato')){
        button.classList.remove ('potato');
        button.classList.add ('kale');  
        console.log('if ausgeführt'); //wieso onclick -> kale UND potato statt nur kale?//
    } else if (button.classList.contains ('kale')){ 
        button.classList.remove ('kale');
        button.classList.add ('carrot');
        console.log('else if ausgeführt');
    } else if (button.classList.contains ('carrot')){
        button.classList.remove('carrot');
        button.classList.add ('potato');
        console.log('else ausgeführt');
    }
    
});

