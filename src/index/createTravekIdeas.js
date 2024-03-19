const btnsContry = document.querySelectorAll('.countrybutton');
const btnContry1 = document.querySelector('.countrybutton.first');
const contentTavelIdeas = document.querySelector('.result_ideas');

document.addEventListener('DOMContentLoaded', () => {
    contentTavelIdeas.innerHTML = "";
    btnContry1.classList.add('contryclick');
    try {
        fetch('assets/json/calendar.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                if(item.continent == btnContry1.value) {
                    createCardTreavelIdeas(item)
                }
            })
        })
    } catch(error) {
        console.log(error);
    }
});

btnsContry.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btnsContry.forEach((btn) => {
            btn.classList.remove('contryclick');
        });
    contentTavelIdeas.innerHTML = "";
    btn.classList.add('contryclick');
    try {
        fetch('assets/json/calendar.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                if(item.continent == btn.value) {
                    createCardTreavelIdeas(item)
                }
            })
        })
    } catch(error) {
        console.log(error);
    }
    })
})

function createCardTreavelIdeas(object) {
    const{dates, img, country, text} = object;
    const div = document.createElement('div');
    const template = 
    `<div class="container2">
    <h3 class="container2__date">${dates}</h3>
    <img class="container2__img" src="${img}" alt="Виды Камчатки">
    <div>
    <div class="container2__name">${country}</div>
    <h3 class="container2__info">${text}</h3>
  </div>
  </div>`;
  div.insertAdjacentHTML('beforeend', template);
  contentTavelIdeas.appendChild(div);
}