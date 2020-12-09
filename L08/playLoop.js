//Play-Button
function playLoop(hihat, kick, snare) {
    setInterval(function () {
        sample[hihat].play();
        sample[kick].play();
        sample[snare].play();
    }, 300);
}
//# sourceMappingURL=playLoop.js.map