const red = document.querySelector('.red')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const body = document.querySelector('.body')

function redColor() {
    red.addEventListener('click', () => {
        if (body.style.backgroundColor !== 'red') {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white'
        }
    })
}
function greenColor() {
    green.addEventListener('click', () => {
        if (body.style.backgroundColor !== 'green') {
            body.style.backgroundColor = 'green';
        } else {
            body.style.backgroundColor = 'white'
        }
    })
}
function blueColor() {
    blue.addEventListener('click', () => {
        if (body.style.backgroundColor !== 'blue') {
            body.style.backgroundColor = 'blue';
        } else {
            body.style.backgroundColor = 'white'
        }
    })
}

redColor()
greenColor()
blueColor()