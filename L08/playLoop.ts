//Play-Button
function playLoop(hihat: number, kick: number, snare: number): void {
    setInterval(function (): void {
        sample[hihat].play();
        sample[kick].play();
        sample[snare].play();
    },          300);
}

