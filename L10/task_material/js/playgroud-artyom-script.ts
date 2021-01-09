declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["Erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });

    function stopContinuousArtyom(): void {
        artyom.fatality();
    };

    var recordButton: HTMLElement;
    recordButton = document.querySelector("fas fa-microphone");

    recordButton.addEventListener("onclick", function (): void {
        console.log("clicked registered");
        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true, //ob er nach einer Erstellten Aufgabe weiter zuhört
                    listen: true, //ob er immer zuhört oder erst auf Kommando
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    });
});


