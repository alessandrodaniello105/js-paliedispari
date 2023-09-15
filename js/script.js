/********************* 
      PALINDROMA
*********************/
// 1. Creo una costante con un prompt dove chiedo il nome all'utente

//DISABILITATO PER TESTARE 'PARI E DISPARI'
//const nameUser = prompt('Inserisci il tuo nome'); 
const nameUser = 'anna';

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
let numPC, numUser;
let somma = 0;

// 2. Creo la variabile con un prompt dove chiedo il numero all'utente
numUser = parseInt(prompt('Inserisci un numero'));

// 3. Creo la funzione randomizer per il numero del computer

numPC = Math.ceil(Math.random() * 5);
console.log(numPC);

// 4. Sommo i due numeri

somma += numUser + numPC;
console.log(somma);
