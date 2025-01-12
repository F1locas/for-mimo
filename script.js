let details = document.getElementById('parent');

let input = document.querySelector('input');
let textValue = document.createElement('p');
textValue.classList.add('text-value');


input.addEventListener('input', () => {
    textValue.innerText = input.value;
    details.appendChild(textValue)
});

input.addEventListener('touchstart', () => {
    textValue.style.color = 'pink';
});

input.addEventListener('dblclick', () => { 
    input.value = '' 
    textValue.style.fontSize = '4px';
    numClicked = 0
    fontSize = 4
    textValue.addEventListener('click', growBigger);
});


let numClicked = 0;
let fontSize = 4;
textValue.style.fontSize = fontSize + 'px';
function growBigger() {

    numClicked++;
    if (numClicked > 7) {
       textValue.removeEventListener('click', growBigger);
    }

    fontSize = fontSize * 1.4; 
    textValue.style.fontSize = fontSize + 'px';

    if (numClicked > 4) {
        textValue.style.fontSize = fontSize * 10 + 'px';
    }
}
