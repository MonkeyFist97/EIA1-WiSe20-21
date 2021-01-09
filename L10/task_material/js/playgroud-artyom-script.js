window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    function stopContinuousArtyom() {
        artyom.fatality();
    }
    ;
    var recordButton;
    recordButton = document.querySelector("fas fa-microphone");
    recordButton.addEventListener("onclick", function () {
        console.log("clicked registered");
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    });
});
//# sourceMappingURL=playgroud-artyom-script.js.map