const dataNew = new Date();
const monthNew = dataNew.getMonth();
let currentIndexMonth = monthNew-1;


const btnPrev = document.getElementById("btn__prev");
const btnActive = document.getElementById("btn__active");
const btnNext = document.getElementById("btn__next");

btnNext.addEventListener('click',()=>{
currentIndexMonth++;
showInfo();
showMonth();
}) 

btnActive.addEventListener('click',()=>{
    currentIndexMonth = monthNew-1;
    showInfo();
    showMonth();
    }) 

    btnPrev.addEventListener('click',()=>{
        if( currentIndexMonth >=info.length){
            currentIndexMonth=0;
        }else{
        currentIndexMonth--;
        }
        showInfo();
        showMonth();
        }) 


let info = [];




document.addEventListener('DOMContentLoaded', function (event) {
    try{
    fetch('assets/json/calendar.json')
        .then(res => res.json())
        .then(data => {
            info = data;
            showInfo(info);
            showMonth(info);
        })
    }catch(error){
        console.log("Ошибка" +error.message);
    }
});

function showInfo() {
    document.getElementById("result").innerHTML = `
        <img class="info-img" src="${info[currentIndexMonth].img}" />
        <div class="info__content-text">
            <h2 class="info__title">${info[currentIndexMonth].country}</h2>
            <p class="info__text">${info[currentIndexMonth].text}</p>
                <div class="info__dop-info">
                    <div class="dop-info__box">
                    <img class="dop-info__icon" src="./assets/images/calendar/map-pin-3.svg" alt="icon" />
                        <h3 class="dop-info__title">Вид отдыха</h3>
                        <p class="dop-info__text">
                        ${info[currentIndexMonth].type}
                        </p>
                    </div>
                    <div class="dop-info__box">
                        <img class="dop-info__icon" src="./assets/images/calendar/Group 112.svg" alt="icon" />
                        <h3 class="dop-info__title">Даты</h3>
                        <p class="dop-info__text">
                        ${info[currentIndexMonth].dates}
                        </p>
                    </div>
                    <div class="dop-info__box">
                        <img class="dop-info__icon" src="./assets/images/calendar/money.svg" alt="icon" />
                        <h3 class="dop-info__title">Стоимость</h3>
                        <p class="dop-info__text">
                        ${info[currentIndexMonth].price}
                        </p>
                    </div>
                    <div class="dop-info__box">
                        <img class="dop-info__icon" src="./assets/images/calendar/stack.svg" alt="icon" />
                        <h3 class="dop-info__title">Требования</h3>
                        <p class="dop-info__text">
                        ${info[currentIndexMonth].requirements}
                        </p>
                    </div>
                </div>
                
        </div>
    `
}

function showMonth(){
    document.getElementById("month-prev").textContent = `${info[currentIndexMonth-1].month}`;
    document.getElementById("month-now").textContent = `${info[currentIndexMonth].month}`;
    document.getElementById("month-next").textContent = `${info[currentIndexMonth+1].month}`;
}