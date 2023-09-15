// **Palidroma**
// 1. Creo una costante con un prompt dove chiedo il nome all'utente
const nameUser = prompt('Inserisci il tuo nome');

inverti(nameUser);
console.log(inverti(nameUser));

function inverti(text) {
  return text.split('').reverse().join('');
};

