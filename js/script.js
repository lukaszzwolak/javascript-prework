function getMoveName(argMoveId) {
    console.log('Wywołanie getMoveName z argumentami:', argMoveId);
    if (argMoveId === 1) {
        return 'kamień';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}


function displayResult(argComputerMove, argPlayerMove) {
    console.log('Ruchy:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
    } else if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
        printMessage('Ty wygrywasz!');
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch');
    } else {
        printMessage('Przegrałeś!');
    }
}

function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to:', randomNumber);

    let computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + computerMove);

    /*
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał:', playerInput);
    */

    let playerMove = getMoveName(parseInt(playerInput));
    if (playerMove === 'nieznany ruch') {
        printMessage('Brawo, znasz więcej cyfr niż 3, ale w grze są tylko 3 możliwości wyboru!');
    } else {
        printMessage('Twój ruch to: ' + playerMove);
        displayResult(computerMove, playerMove);
    }
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});