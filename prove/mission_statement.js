let elem = document.querySelector('select')
let logo = document.querySelector('img')

const html = document.getElementById('html')
elem.addEventListener('change', changeTheme)

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        html.style.color = 'white'
        html.style.background_color = 'grey'
    } else {
        html.style.color = 'black'
        html.style.background_color = 'white'
    }
}