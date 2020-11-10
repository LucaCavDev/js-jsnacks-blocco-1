//jsnack 2
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale




var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];

console.log(arrayObj);
var newArray = [];

for (var i of arrayObj) {
  newArray.push(i);
}

console.log(newArray);


for (var i = 0; i < newArray.length; i++) {
  var numeroRandom = String.fromCharCode(97+Math.floor(Math.random() * 26));  // al posto del 97 mettere 65 se si volgiono le lettere maiuscole
  newArray[i].position = numeroRandom;
}




//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
