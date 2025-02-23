const paragraph = document.querySelector('p');
const button = document.querySelector('button');
const inputText = document.querySelector('.input');

button.addEventListener('click', () => {
    inputText.focus();
    paragraph.remove();
});