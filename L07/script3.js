//// var sound:HTMLAudioElement [] = new Audio ['./assets/A.mp3', ...]  //why not?
//// var sound:HTMLAudioElement [] = (kein 'new Audio') [] //why not?
var sample = [];
sample[0] = new Audio('./assets/A.mp3');
sample[1] = new Audio('./assets/C.mp3');
sample[2] = new Audio('./assets/F.mp3');
sample[3] = new Audio('./assets/G.mp3');
sample[4] = new Audio('./assets/hihat.mp3');
sample[5] = new Audio('./assets/kick.mp3');
sample[6] = new Audio('./assets/laugh-1.mp3');
sample[7] = new Audio('./assets/laugh-2.mp3');
sample[8] = new Audio('./assets/snare.mp3');
//Funktion
function playSample(Sound) {
    sample[Sound].play();
}
//Play-Button
function playLoop(hihat, kick, snare) {
    setInterval(function () {
        sample[hihat].play();
        sample[kick].play();
        sample[snare].play();
    }, 300);
}
;
//Array für Loop
document.querySelector(".playButton").addEventListener('click', function () {
    playLoop(4, 5, 8);
});
//Sound A
document.querySelector(".padA").addEventListener('click', function () {
    playSample(0);
});
//Sound C
document.querySelector(".padC").addEventListener('click', function () {
    playSample(1);
});
//Sound F
document.querySelector(".padF").addEventListener('click', function () {
    playSample(2);
});
//Sound G
document.querySelector(".padG").addEventListener('click', function () {
    playSample(3);
});
//Sound hihat
document.querySelector(".hihat").addEventListener('click', function () {
    playSample(4);
});
//Sound kick
document.querySelector(".kick").addEventListener('click', function () {
    playSample(5);
});
//Sound laugh-1
document.querySelector(".laugh-1").addEventListener('click', function () {
    playSample(6);
});
//Sound laugh-2
document.querySelector(".laugh-2").addEventListener('click', function () {
    playSample(7);
});
//Sound laugh-2
document.querySelector(".snare").addEventListener('click', function () {
    playSample(8);
});
//# sourceMappingURL=script3.js.map