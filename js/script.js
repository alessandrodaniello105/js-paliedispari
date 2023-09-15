/********************* 
      PALINDROMA
*********************/
// 1. Creo una costante con un prompt dove chiedo il nome all'utente

//DISABILITATO PER TESTARE 'PARI E DISPARI'
// const nameUser = prompt('Inserisci il tuo nome'); 
const nameUser = 'anna'; //cancella questa riga e abilita quella superiore per attivare

inverti(nameUser);
// console.log(inverti(nameUser));


// 2.
function inverti(text) {
  return text.split('').reverse().join('');
};

isPali();

// 3.
function isPali(x) {
  x = (nameUser == inverti(nameUser) ? true : false);
  console.log(x);
}


/********************* 
    PARI E DISPARI
*********************/
// 1. Creo le variabili per somma ( = 0) e numero generato per il computer
let numPC, numUser, userTake;
let somma = 0;

// 2. Creo la variabile con un prompt dove chiedo all'utente di scegliere il numero e pari o dispari
numUser = parseInt(prompt('Inserisci un numero'));
userTake = prompt('Pari o dispari?');

// 3. Creo la funzione randomizer per il numero del computer
randomizer();
isDispari(somma);


console.log(numPC);

// 4. Sommo i due numeri
somma += numUser + numPC;
console.log(somma);


// 6. Stampo il vincitore
if (isDispari(somma) && userTake == isDispari(somma)) {
  console.log('hai vinto!');
}
else {
  console.log('ha vinto il computer!');
}


function randomizer(){
  numPC = Math.ceil(Math.random() * 5);
};

// 5. Verifico se la somma è pari o dispari
function isDispari(num) {
  return num = somma % 2 ? 'dispari' : 'pari';
}
console.log(isDispari(somma));