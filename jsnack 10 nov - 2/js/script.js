// CONSEGNA:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.




var listaBici = [
  {
    "nome": "graziella",
    "peso": 34
  },
  {
    "nome": "mountain-bike",
    "peso": 74
  },
  {
    "nome": "bici-da-corsa",
    "peso": 23
  },
  {
    "nome": "ciclette",
    "peso": 8
  },
  {
    "nome": "bici-lego",
    "peso": 2
  }
];
console.log(listaBici);

for (var i = 0; i < listaBici.length; i++) {
  console.log("Il nome è: *" + listaBici[i].nome + "* " + "Il peso è: *" + listaBici[i].peso + "*");
}

//OPZIONE UNO faccio un bel sort of, ma non lo lascio base, in quanto ho varie proprietà dentro e voglio che mi mette in ordine crescente gli elementi dell'array in base al peso, poi stampo l'elemento dell'array in posizione 0, ovvero quello col peso piu piccolo
listaBici.sort(function (a, b) {
  return a.peso - b.peso
});

var min = listaBici[0];

console.log(min);


//altro metodo (mi piace di piu la mia opzione uno)

var piuLeggera = listaBici[0];

for (var i = 0; i < listaBici.length; i++) {
  if (piuLeggera.peso > listaBici[i].peso) {
    piuLeggera = listaBici[i];
  }
}

console.log(piuLeggera);
