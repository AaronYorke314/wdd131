const dice = [
    {
        imgSrc: '1.png',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: '2.png',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: '3.png',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: '4.png',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: '5.png',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: '6.png',
        imgAlt: 'A die showing the 1 side.'
    }
]


function get_die(die) {
    return `<img id='dice' src='${die.imgSrc}' alt='${die.imgAlt}'>`
}

function renderdie(number) {
    let html = get_die(number);
    die.innerHTML += html
}

function init(num) {
    for (let i = 0; i < num; i++) {
        let randomNum = Math.floor(Math.random() * dice.length);
        renderdie(dice[randomNum]);
    }
}

let randomNum = Math.floor(Math.random() * dice.length);
let die = document.getElementById('die');
console.log(randomNum)

let button2 = document.querySelector('#button2');
let input = document.querySelector('#search');
let button1 = document.querySelector('#button1')

button1.addEventListener('click', display);
button2.addEventListener('click', display2);
function display() {
    let dienum = input.value;
    if (dienum > 0) {
        if (dienum <= 5) {
        die.innerHTML = ''
        init(dienum)
    } else {
        die.innerHTML = "<h2 id='error'>That Number is too big! please pick something smaller!</h2>"
    }
    } else if (dienum.length == 0) {
        die.innerHTML = ''
        init(5)
    } else {
        die.innerHTML = "<h2 id='error'>Only positive, non-zero numbers are allowed!</h2>"
    }
}
function display2() {
    die.innerHTML = ''
    init(5)
}

init(5)