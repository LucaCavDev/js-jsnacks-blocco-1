var bombe = [];
var numeroCasuale;
var exit;

for (var i = 0; i < 16; i++) {
  // controllo se la bomba è già stata inserita
  exit = false;
  do {
    numeroCasuale = randomNumber(100);
    // console.log(numeroCasuale);
    // se numero non presente
    if (bombe.indexOf(numeroCasuale) === -1) {
      bombe.push(numeroCasuale);
      exit = true;
    } else {
      // console.log("numero già ripetuto: ", numeroCasuale);
    }
  } while (exit != true);

}

console.log("bombe:", bombe);
