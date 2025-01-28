//komputer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber === 1) {
    computerMove = 'kamień';
} else if (randomNumber === 2) {
    computerMove = 'papier';
} else if (randomNumber === 3) {
    computerMove = 'nożyce';
}

printMessage('Ruch komputera to: ' + computerMove);

//gracz
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput === '1') {
  playerMove = 'kamień';
} else if (playerInput === '2') {
    playerMove = 'papier';
} else if (playerInput === '3') {
    playerMove = 'nożyce';
} else {
    printMessage('Brawo umiesz liczyć do 4, ale w grze są 3 możliwości wyboru!');
}

printMessage('Twój ruch to: ' + playerMove);

//wynik

if (computerMove === playerMove) {
    printMessage('Remis!');
} else if (computerMove === 'kamień' && playerMove === 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'papier' && playerMove === 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'nożyce' && playerMove === 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (playerMove === 'nieznany ruch') {
    printMessage('Nieznany ruch, nie mozna okreslic wyniku gry');
} else {
    printMessage('Przegrales, a komputer wygrywa!');
}

if(playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    printMessage('Brawo umiesz liczyc do 4 ale w grze sa 3 mozliwosci wyboru!')
}

printMessage('Twój ruch to: ' + playerMove);
