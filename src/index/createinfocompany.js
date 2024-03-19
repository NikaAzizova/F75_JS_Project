const btns = document.querySelectorAll('.buttonpage2');
const btn1 = document.querySelector('.buttonpage2.first');
const content1 = document.querySelector('.page2_content');
const container = document.querySelector('.info_comp');

document.addEventListener('DOMContentLoaded', () => {
    container.innerHTML = "";
    btn1.classList.add('click');
    try {
        fetch('assets/json/compatyinfo.json')
        .then(res => res.json())
        .then(data => {
                createInfo(data[0]);
        })
    } catch(error) {
        console.log(error);
    }
})


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach((btn) => {
            btn.classList.remove('click');
        })
        container.innerHTML = "";
        const btnId = e.target.id;
        btns[btnId-1].classList.add('click');
        try {
        fetch('assets/json/compatyinfo.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                if(item.id == btnId) {
                    createInfo(item);
                }
            })
        })

    } catch(error) {
        console.log(error);
    }
    });
});


function createInfo(object) { 
    const {text, img} = object;
    const div = document.createElement('div');
    const template = `
    <div class="page2_content">
        <h3 class="page2_intro__colorwhite">${text}</h3>
        <img class="img_view" src="${img}" alt="view1">
          </div>
    `;
    div.insertAdjacentHTML('beforeend', template);
    container.appendChild(div);
}
