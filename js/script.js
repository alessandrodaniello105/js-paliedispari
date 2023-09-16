/********************* 
      PALINDROMA
*********************/
// 1. Creo una costante con un prompt dove chiedo il nome all'utente
// DISABILITATO PER TESTARE 'PARI E DISPARI'
const wordUser = prompt('Inserisci la parola da verificare'); 
// const wordUser = 'anna'; 

const invertedName = inverti(wordUser);

// 2.
function inverti(text) {
  return text.split('').reverse().join('');
};

isPali(wordUser);
console.log ('la parola è palindroma?', isPali(wordUser));

// 3.
function isPali(parola) {
  return parola = wordUser == invertedName;
}
// console.log(parola);

// 4. Stampo il risultato
const outputPar = document.createElement('p');
document.querySelector('body').append(outputPar);


// 6. Stampo il vincitore
const output = document.querySelector('p');

const yesMessage = `La parola che hai scelto è palindroma <br> <br>`;
const noMessage =  `La parola che hai scelto non è palindroma <br> <br>`;


isPali(wordUser) ? output.innerHTML = yesMessage : output.innerHTML = noMessage ;


// output.innerHTML = 'La parola che hai scelto è palindroma <br> <br>';



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
const randNum = randomizer();
isPari(somma);


console.log(numPC);

// 4. Sommo i due numeri
somma += numUser + numPC;
console.log(somma);

const loseMessage = 'Ha vinto il computer!';
const winMessage = 'Hai vinto!';



// 6b.
// const outputPara = document.createElement('p');
// document.querySelector('body').append(outputPara);


// 6. Stampo il vincitore
// const output = document.querySelector('p');


output.innerHTML += `
  Hai giocato <strong>${numUser}</strong> e hai scelto <strong>${userTake}</strong>. <br>
  Il computer ha giocato <strong>${numPC}</strong>. Il risultato è <strong>${somma}</strong>. <br>
`;


console.log('CHECK isPari', isPari(somma));


if (userTake === 'dispari' && isPari(somma) || userTake === 'pari' && !isPari(somma)) {

  output.innerHTML += winMessage;
  
} else {
  
  output.innerHTML += loseMessage;

}




function randomizer(){
  return numPC = Math.ceil(Math.random() * 5);
};

// 5. Verifico se la somma è pari o dispari
function isPari(num) {
  return num % 2;
}
console.log(isPari(somma));