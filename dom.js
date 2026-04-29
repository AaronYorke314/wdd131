let title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

document.querySelector('#topics').style.color = 'red';

const wrapper = document.getElementById('content');

wrapper.style.backgroundColor = 'lightBlue';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

para.style.fontSize = '.10em';

para.classList.add('background');

const image = document.querySelector('img');

image.setAttribute('src', 'ponder/q.png')

let selectElem = document.getElementById('webdevlist');

const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');


selectElem.addEventListener('change', function(){
    html.style.color = 'purple';
    css.style.color = 'purple';
    js.style.color = 'purple';
    let codeValue = selectElem.value;
    document.getElementById(codeValue).style.color = 'red';
});