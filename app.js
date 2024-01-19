const maxNumber = 100;

let secretNumber = parseInt(Math.random() * maxNumber + 1);

console.log(secretNumber)
alert("Boas vindas ao jogo do número secreto!");

let userNumber;

let chances = 1;



while (userNumber != secretNumber) {
  userNumber = prompt(`Escolha um numero entre 1 e ${maxNumber}`);

  if (secretNumber == userNumber) {
    break;
    
  } else {
    if (userNumber > secretNumber) {
      alert(`O número secreto é menor que ${userNumber}`);
    } else {
      alert(`O número secreto é maior que ${userNumber}`);
    }
    chances++
  }
}

let chancesWord = chances > 1 ? 'tentativas' : 'tentativa';

alert(`Você Acertou 😁 ${secretNumber} em ${chances} ${chancesWord}`);