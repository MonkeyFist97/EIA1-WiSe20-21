console .log('Emissionen der Welt');

var africa08:number = 1028;
var africa18:number = 1235.5;

var samerica08:number = 1132.6;
var samerica18:number = 1261.5;

var europa08:number = 4965.7;
var europa18:number = 4209.3;

var namerica08:number = 6600.4;
var namerica18:number = 6035.6;

var asia08:number = 12954.7;
var asia18:number = 16274.1;

var australia08:number = 1993;
var australia18:number = 2100.5;

var allEmissions18:number = (africa18 + samerica18 + europa18 + namerica18 + asia18 + australia18);
var hundred:number = 100;

/*Europe*/
console .log('Die Emission von Europa ist: ' + europa18 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + (hundred / (allEmissions18 / europa18)).toFixed (2) + '%.') ;
console .log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + (hundred /(europa18/europa08)).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + (europa18 - europa08).toFixed (2) + 'kg CO2');

/*Africa*/
console .log('Die Emission von Africa ist: ' + africa18 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + (hundred / (allEmissions18 / africa18)).toFixed (2) + '%.') ;
console .log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (hundred /(africa18/africa08)).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + (africa18 - africa08).toFixed (2) + 'kg CO2');

/*South America*/
console .log('Die Emission von Suedamerika ist: ' + samerica18 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Suedamerika damit ' + (hundred / (allEmissions18 / samerica18)).toFixed (2) + '%.') ;
console .log('Für Suedamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (hundred /(samerica18 / samerica08)).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + (samerica18 - samerica08).toFixed (2) + 'kg CO2');

/*North America*/
console .log('Die Emission von Nordamerika ist: ' + namerica18 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + (hundred / (allEmissions18 / namerica18)).toFixed (2) + '%.') ;
console .log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (hundred /(namerica18 / namerica08)).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + (namerica18 - namerica08).toFixed (2) + 'kg CO2');

/*Asia*/
console .log('Die Emission von Asien ist: ' + asia18 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + (hundred / (allEmissions18 / asia18)).toFixed (2) + '%.') ;
console .log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + (hundred /(asia18 / asia08)).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + (asia18 - asia08).toFixed (2) + 'kg CO2');

/*Australia*/
console .log('Die Emission von Australien ist: ' + australia18 + 'kg CO2.');
console .log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + (hundred / (allEmissions18 / australia18)).toFixed (2) + '%.') ;
console .log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + (hundred /(australia18 / australia08)).toFixed (2) + '% verändert.');
console .log('2018 im Vergleich zu 2008 sind das ' + (australia18 - australia08).toFixed (2) + 'kg CO2');
