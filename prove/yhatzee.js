const dice = [
    {
        imgSrc: 'bob.img',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: 'bob.img',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: 'bob.img',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: 'bob.img',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: 'bob.img',
        imgAlt: 'A die showing the 1 side.'
    },
    {
        imgSrc: 'bob.img',
        imgAlt: 'A die showing the 1 side.'
    }
]


/*input.addEventListener('keypress', handleEnter); */
function handleEnter(event) {
  if (event.key === 'Enter') {
    search();
  }
}

function get_die(hike) {
    return `<div class="die_block">
  <div class="hike-content">
    <h2>${hike.name}</h2>
    <div class="hike-tags">
      ${tagTemplate(hike.tags)}
    </div>
    <p>${hike.description}</p>
    <p>${difficultyTemplate(hike.difficulty)}</p>
  </div>
</div>`
}

function renderHike(number) {
    let html = get_die(number);
    die.innerHTML += html
}

let randomNum = Math.ceil(Math.random() * dice.length);
let die = document.getElementById('die');
console.log(randomNum)