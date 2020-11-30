//Europe
var europa08:number = 4965.7;
var europa18:number = 4209.3;

//North America
var namerica08:number = 6600.4;
var namerica18:number = 6035.6;

//South America
var samerica08:number = 1132.6;
var samerica18:number = 1261.5;

//Africa
var africa08:number = 1028;
var africa18:number = 1235.5;

//Asia
var asia08:number = 12954.7;
var asia18:number = 16274.1;

//Australia
var australia08:number = 1993;
var australia18:number = 2100.5;

var allEmissions18:number = (africa18 + samerica18 + europa18 + namerica18 + asia18 + australia18);

//Funktion

function anzeigeEmissionen (continent: string , continent18: number , continent08: number ){
    document.querySelector ("#titleRegion").innerHTML = continent;
    document.querySelector ("#emission18").innerHTML = continent18 + "t CO2";
    document.querySelector ("#percentrelative").innerHTML = (100 / (allEmissions18 / continent18)).toFixed (2);
    document.querySelector ("#percentgrowth").innerHTML = Math.round(((continent18/continent08)-1)*100).toString();
    document.querySelector ("#rategrowth").innerHTML = Math.round(continent18 - continent08) + "t CO2";
    document.querySelector (".chart").setAttribute ('style', 'height:' + (100 / (allEmissions18 / continent18)).toFixed (2) + '%');
    document.querySelector ("").setAttribute ('style' , 'opacity:' + 1);
}

//Europa
    document.querySelector (".europe").addEventListener ('click' , function () {
        anzeigeEmissionen ("Europe" , europa18 , europa08)
    });

//North America
document.querySelector (".northamerica").addEventListener ('click' , function () {
    anzeigeEmissionen ("North America" , namerica18 , namerica08)
    });

//South America
document.querySelector (".southamerica").addEventListener ('click' , function () {
    anzeigeEmissionen ("South America" , samerica18 , samerica08)
    });

//Africa
document.querySelector (".africa").addEventListener ('click' , function () {
    anzeigeEmissionen ("Africa" , africa18 , africa08)
    })
    
//Asia
document.querySelector (".asia").addEventListener ('click' , function () {
    anzeigeEmissionen ("Asia" , asia18 , asia08)
    });
    
//Australia
document.querySelector (".australia").addEventListener ('click' , function () {
    anzeigeEmissionen ("Australia" , australia18 , australia08)
    });