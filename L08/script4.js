// var sound:HTMLAudioElement [] = new Audio ['./assets/A.mp3', ...]  //why not?
// var sound:HTMLAudioElement [] = (kein 'new Audio') [] //why not?
var sample = [];
sample[0] = new Audio("./assets/A.mp3");
sample[1] = new Audio("./assets/C.mp3");
sample[2] = new Audio("./assets/F.mp3");
sample[3] = new Audio("./assets/G.mp3");
sample[4] = new Audio("./assets/hihat.mp3");
sample[5] = new Audio("./assets/kick.mp3");
sample[6] = new Audio("./assets/laugh-1.mp3");
sample[7] = new Audio("./assets/laugh-2.mp3");
sample[8] = new Audio("./assets/snare.mp3");
//Funktion
// tslint:disable-next-line: variable-name
function playSample(Sound) {
    sample[Sound].play();
}
//Sound A
// tslint:disable-next-line: typedef
document.querySelector(".padA").addEventListener("click", function () {
    playSample(0);
});
//Sound C
document.querySelector(".padC").addEventListener("click", function () {
    playSample(1);
});
//Sound F
document.querySelector(".padF").addEventListener("click", function () {
    playSample(2);
});
//Sound G
document.querySelector(".padG").addEventListener("click", function () {
    playSample(3);
});
//Sound hihat
document.querySelector(".hihat").addEventListener("click", function () {
    playSample(4);
});
//Sound kick
document.querySelector(".kick").addEventListener("click", function () {
    playSample(5);
});
//Sound laugh-1
document.querySelector(".laugh-1").addEventListener("click", function () {
    playSample(6);
});
//Sound laugh-2
document.querySelector(".laugh-2").addEventListener("click", function () {
    playSample(7);
});
//Sound laugh-2
document.querySelector(".snare").addEventListener("click", function () {
    playSample(8);
});
//Record-Button leuchtet rot auf wenn "Aktiv"
var recordButton = document.getElementById("record");
window.addEventListener("load", function () {
    recordButton.addEventListener("click", function () {
        if (recordButton.classList.contains("inactive")) {
            recordButton.classList.remove("inactive");
            recordButton.classList.add("active");
        }
        else if (recordButton.classList.contains("active")) {
            recordButton.classList.remove("active");
            recordButton.classList.add("inactive");
        }
    });
});
//Play-Button transformiert zu Stop-Button
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
playButton.addEventListener("click", function () {
    playStop(this, stopButton);
});
stopButton.addEventListener("click", function () {
    playStop(this, playButton);
});
function playStop(firstHTML, secondHTML) {
    firstHTML.classList.add("is-hidden");
    secondHTML.classList.remove("is-hidden");
}
//Funktion Recording
//# sourceMappingURL=script4.js.map