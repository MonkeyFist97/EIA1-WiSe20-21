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
    recordingBeat(0);
});
//Sound C
document.querySelector(".padC").addEventListener("click", function () {
    playSample(1);
    recordingBeat(1);
});
//Sound F
document.querySelector(".padF").addEventListener("click", function () {
    playSample(2);
    recordingBeat(2);
});
//Sound G
document.querySelector(".padG").addEventListener("click", function () {
    playSample(3);
    recordingBeat(3);
});
//Sound hihat
document.querySelector(".hihat").addEventListener("click", function () {
    playSample(4);
    recordingBeat(4);
});
//Sound kick
document.querySelector(".kick").addEventListener("click", function () {
    playSample(5);
    recordingBeat(5);
});
//Sound laugh-1
document.querySelector(".laugh-1").addEventListener("click", function () {
    playSample(6);
    recordingBeat(6);
});
//Sound laugh-2
document.querySelector(".laugh-2").addEventListener("click", function () {
    playSample(7);
    recordingBeat(7);
});
//Sound laugh-2
document.querySelector(".snare").addEventListener("click", function () {
    playSample(8);
    recordingBeat(8);
});
//Variablen der Buttons
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var recordButton = document.getElementById("record");
var trashButton = document.getElementById("trash");
//Record-Button leuchtet rot auf wenn "Aktiv"; zusätzlich Sounds aufnehmen mit dem boolean
var recording;
window.addEventListener("load", function () {
    recordButton.addEventListener("click", function () {
        if (recordButton.classList.contains("inactive")) {
            recordButton.classList.remove("inactive");
            recordButton.classList.add("active");
            recording = true;
        }
        else if (recordButton.classList.contains("active")) {
            recordButton.classList.remove("active");
            recordButton.classList.add("inactive");
            recording = false;
        }
    });
});
//Die Sounds aufnehmen - Die Töne in den Beat Array pushen
function recordingBeat(Sound) {
    if (recording == true) {
        beat.push(Sound);
    }
}
;
//Der aufgenommene Loop wiederholt sich hiermit 
var myInterval;
var beat = [];
var index = 0;
function playLoop() {
    myInterval = setInterval(function () {
        if (index < beat.length) {
            playSample(beat[index]);
            index++;
        }
        else {
            index = 0;
        }
    }, 300);
}
;
//Play-Button transformiert zu Stop-Button
function togglePlayStop(firstHTML, secondHTML) {
    firstHTML.classList.add("is-hidden");
    secondHTML.classList.remove("is-hidden");
}
playButton.addEventListener("click", function () {
    togglePlayStop(this, stopButton);
    playLoop();
});
stopButton.addEventListener("click", function () {
    togglePlayStop(this, playButton);
    clearInterval(myInterval);
});
//Aufgenommenen "Loop" löschen
trashButton.addEventListener("click", function () {
    beat = [];
});
//# sourceMappingURL=script4.js.map