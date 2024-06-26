/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  const animal = pets[i];
  console.log("Animale presente nell'Array stringa:", animal);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
for (let i = 0; i < pets.length; i++) {
  animal = pets.sort();
}
console.log("Ordine alfabetico:", animal);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for (let i = pets.length - 1; 0 <= i; i--) {
  animal = pets[i];
  console.log(animal);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
console.log(pets);
pets.push("cat");
console.log("Dal primo all'ultimo posto: ", pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "aa 123 bb"; //non sono riuscito ad attribuire un diverso numero di targa ad ogni oggetto dell'array.
  let targa = cars[i].licensePlate;
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars[3] = {
  brand: "BMW",
  model: "M3",
  color: "grey",
  trims: ["MSport", "turbo"],
  licensePlate: "aa 126 bb",
};
console.log("Aggiunto oggetto all'array Cars", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log("Eliminato ultimo elemento della proprietà trims.", cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0];
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 90, 32, 66, 313, 321, 105,
];
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log("I numeri dell'array sono: ", numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
2   dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];
let numbers = [];
for (let i = 0; i < alfabeto.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      numbers.push(1);
      break;
    case "b":
      numbers.push(2);
      break;
    case "c":
      numbers.push(3);
      break;
    case "d":
      numbers.push(4);
      break;
    case "e":
      numbers.push(5);
      break;
    case "f":
      numbers.push(6);
      break;
    case "g":
      numbers.push(7);
      break;
    case "h":
      numbers.push(8);
      break;
    case "i":
      numbers.push(9);
      break;
    case "l":
      numbers.push(10);
      break;
    case "m":
      numbers.push(11);
      break;
    case "n":
      numbers.push(12);
      break;
    case "o":
      numbers.push(13);
      break;
    case "p":
      numbers.push(14);
      break;
    case "q":
      numbers.push(15);
      break;
    case "r":
      numbers.push(16);
      break;
    case "s":
      numbers.push(17);
      break;
    case "t":
      numbers.push(18);
      break;
    case "u":
      numbers.push(19);
      break;
    case "v":
      numbers.push(20);
      break;
    case "z":
      numbers.push(21);
      break;
  }
}
//console.log(alfabeto);
console.log("Le lettere richieste sono rispettivamente queste: ", numbers);
