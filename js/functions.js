function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function buttonClicked(){
	printMessage('Guzik został kliknięty');
}

let testButton = document.getElementyById('test-button');

testButton.addEventListener('click', buttonClicked);