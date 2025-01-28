
function getMoveName(argMoveId) {
    console.log('wywolanie getMoveName z argumentami', argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}


function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == argPlayerMove){
      printMessage('Remis!');
    } else if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ){
      printMessage('Ty wygyrwasz!');
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch');
    } else {
        printMessage('Przegrales!')
    }
  }

clearMessages();

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
printMessage('ruch komputera to: ' + computerMove);

/*let computerMove = 'nieznany ruch';

if(randomNumber === 1) {
    computerMove = 'kamień';
} else if (randomNumber === 2) {
    computerMove = 'papier';
} else if (randomNumber === 3) {
    computerMove = 'nożyce';
}

printMessage('Ruch komputera to: ' + computerMove);*/

//gracz
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(parseInt(playerInput));
if (playerMove == 'nieznany ruch') {
    printMessage('Brawo znasz wiecej cyfr niz 3, ale w grze są 3 możliwości wyboru!');
} else {
    printMessage('Twoj ruch to: ' + playerMove);

    displayResult(computerMove, playerMove)
}
/*let playerMove = 'nieznany ruch';

if(playerInput === '1') {
  playerMove = 'kamień';
} else if (playerInput === '2') {
    playerMove = 'papier';
} else if (playerInput === '3') {
    playerMove = 'nożyce';
} else {
    printMessage('Brawo umiesz liczyć do 4, ale w grze są 3 możliwości wyboru!');
}

printMessage('Twój ruch to: ' + playerMove);*/

//wynik

/*if (computerMove === playerMove) {
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
} */

/* if(playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    printMessage('Brawo umiesz liczyc do 4 ale w grze sa 3 mozliwosci wyboru!')
}

printMessage('Twój ruch to: ' + playerMove); */
