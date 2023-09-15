// **Palidroma**
// 1. Creo una costante con un prompt dove chiedo il nome all'utente
const nameUser = prompt('Inserisci il tuo nome');

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
