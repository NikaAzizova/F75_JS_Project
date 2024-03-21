const modal = document.getElementById("modal");
//блок туров
document.addEventListener('DOMContentLoaded', function() {
    const thisDate = new Date();
    const thisMonth = thisDate.getMonth()+1;
    try {
        fetch('assets/json/tours.json')
        .then(res => res.json())
        .then(data => {
                data.forEach(item => {
                    if(parseInt(item.monthnumb) === thisMonth) {
                        createCart(item);
                        console.log(item.id);
                    }
            });
            let btnsReserve = document.querySelectorAll('.info__buttonsreserve');
            btnsReserve.forEach(btn => {
              btn.addEventListener('click', (e) => {
                modal.style.display = 'block';
              })
        })

            let btns = document.querySelectorAll('.info__buttonsmoreinfo');
            btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
            let id = e.target.id;
            console.log(id);
            localStorage.setItem('currentIndex', id);
            window.location.href = "/tour-page.html";
      });
      });
      })
    } catch(error) {
        console.log(error);
    }
    
})
  
function createCart(object) {
    const container = document.querySelector('.card');
    const {city, monthnumb, title, text, price, current, body_img, start_day, end_day, id} = object;
    const div = document.createElement('div');
    const template = `
    <div class="container">
            <div class="container__img">
            <div class="container__name">${city}</div>
            <img class="" src=${body_img} alt="Сахалин">
            </div>
            <div class="info">
              <div class="info__name">${city}</div>
              <h3 class="info__color">${title}</h3>
              <div class="info__date"><span class="info__coloryellow">${start_day}</span>/${monthnumb} - <span class="info__coloryellow">${end_day}</span>/${monthnumb}</div>
              <h3 class="info__textpadding">${text}</h3>
              <h3 class="info__specific">за человека</h3>
              <div class="info__price">${price} <span class="info__coloryellow">${current}</span></div>
              <div class="info__buttons">
              <button class="info__buttonsreserve">забронировать</button>
              <button class="info__buttonsmoreinfo" id="${id}">ПОДРОБНЕЕ О ТУРЕ
                <img src="assets/images/index/arrow.png" alt="ПОДРОБНЕЕ О ТУРЕ">
              </button>
              </div>
              <div class="info__bottom">
                <div>
              <img src="assets/images/index/calendar.png" alt="Календарь">
              <span class="info_day">${(end_day - start_day)+1} дн.</span>
                </div>
                <div>
              <img src="assets/images/index/airplane.png" alt="Перелет">
              <span class="info_tranfer">перелет</span>
                </div>
              </div>
              </div>
          </div>
    `;
    div.insertAdjacentHTML('beforeend', template);
    container.appendChild(div);
}

const btnClose = document.querySelector(".modal__close");
btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});