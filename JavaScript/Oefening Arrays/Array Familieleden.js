const setup = () => {
}
window.addEventListener("load", setup);

let familieLeden = ['Greet', 'Greta', 'Gertjan', 'Gert', 'Gerard'];
console.log(familieLeden.length);
console.log(familieLeden[0]);
console.log(familieLeden[2]);
console.log(familieLeden[4]);


function VoegNaamToe(naam) {
    familieLeden.push(naam);
}
console.log(familieLeden);

VoegNaamToe(window.prompt('Voeg naam toe:', ""));

console.log(familieLeden.toString());




/*Maak een array met namen van familieleden aan. Zorg dat er minimaal vijf zijn. Voer daarmee volgende
opdrachten uit:
    ‐ schrijf naar de console hoeveel elementen de array bevat
‐ schrijf het eerste, derde en vijfde element uit de array naar de console
‐ Vraag met prompt() een extra naam op en voeg deze toe aan de Array. Probeer dit via een zelf
geschreven functie VoegNaamToe. Maak gebruik van pass‐by‐reference.  Schrijf vervolgens het
resultaat naar de console.
‐ Converteer de array naar een string en toon deze op de console.*/