
const button = document.querySelector('.offer__button')
const div = document.querySelector('.expectation')

button.addEventListener('click', makeCLick);

function makeCLick() {
    div.scrollIntoView({ 
        block: 'nearest',
        behavior: 'smooth', 
    })
}

