//Europe
var europa08 = 4965.7;
var europa18 = 4209.3;
//North America
var namerica08 = 6600.4;
var namerica18 = 6035.6;
//South America
var samerica08 = 1132.6;
var samerica18 = 1261.5;
//Africa
var africa08 = 1028;
var africa18 = 1235.5;
//Asia
var asia08 = 12954.7;
var asia18 = 16274.1;
//Australia
var australia08 = 1993;
var australia18 = 2100.5;
var allEmissions18 = (africa18 + samerica18 + europa18 + namerica18 + asia18 + australia18);
//Funktion
function anzeigeEmissionen(continent, continent18, continent08) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#emission18").innerHTML = continent18.toString();
    document.querySelector("#percentrelative").innerHTML = (100 / (allEmissions18 / continent18)).toFixed(2);
    document.querySelector("#percentgrowth").innerHTML = Math.round(((continent18 / continent08) - 1) * 100).toString();
    document.querySelector("#rategrowth").innerHTML = Math.round(continent18 - continent08) + "kg";
    document.querySelector(".chart").setAttribute('style', 'height:' + (100 / (allEmissions18 / continent18)).toFixed(2) + '%');
}
//Europa
document.querySelector(".europe").addEventListener('click', function () {
    anzeigeEmissionen("Europe", europa18, europa08);
});
//North America
document.querySelector(".northamerica").addEventListener('click', function () {
    anzeigeEmissionen("North America", namerica18, namerica08);
});
//South America
document.querySelector(".southamerica").addEventListener('click', function () {
    anzeigeEmissionen("South America", samerica18, samerica08);
});
//Africa
document.querySelector(".africa").addEventListener('click', function () {
    anzeigeEmissionen("Africa", africa18, africa08);
});
//Asia
document.querySelector(".asia").addEventListener('click', function () {
    anzeigeEmissionen("Asia", asia18, asia08);
});
//Australia
document.querySelector(".australia").addEventListener('click', function () {
    anzeigeEmissionen("Australia", australia18, australia08);
});
//# sourceMappingURL=script2.js.map