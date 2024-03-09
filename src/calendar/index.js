import {
    name,
    tel,
    email,
    number,btnActive,btnNext,btnPrev,LinkLearnMore
} from "./vars";
import {
    nameInput,
    emailInput,
    telephoneInput,
    errorName,
    errorEmail,
    errorTelephone,
    formMessage
} from "./vars";
import {
    validateEmail,
    validateName,
    validatePerson,
    validateTel,
    generalError
} from "./functions";

const dataNew = new Date();
const monthNew = dataNew.getMonth();
let currentIndexMonth = monthNew;
const btnInfo = document.getElementById("info__btn");
const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("modal__close")[0];
const confirmForm = document.forms.confirmForm;
const inputs = document.querySelectorAll('.input');
let hasError = false;

function LearnMore(){
    let currentIndex= info[currentIndexMonth].id;
    localStorage.setItem("currentIndex",currentIndex);
    console.log(currentIndex);
    }

LinkLearnMore.addEventListener('click',LearnMore);


confirmForm.addEventListener('submit', function (evevnt) {
    evevnt.preventDefault();
    let hasError = false;



    let errors = document.querySelectorAll('.message-error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }


    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            let error = generalError(' Это поле не заполнено.')
            inputs[i].after(error);
            hasError = true;
        }
    }

    validateEmail();
    validatePerson();
    validateName();
    validateTel();

    if (hasError === false) {
        let bookingData = {
            name: name.value,
            tel: tel.value,
            email: email.value,
            tour: document.getElementById("modal__title-name").textContent,
            dates: document.getElementById("modal__title-datas").textContent,
            numberPerson: number.value,
            sum: document.getElementById("modal__price-sum").textContent
        };
        let confirmTour = JSON.stringify(bookingData);
        localStorage.setItem("newOrder", confirmTour);
        confirmForm.submit();
        alert('Форма успешно отправлена!');
    }
})




btnNext.addEventListener('click', () => {
    if (currentIndexMonth >= 11) {
        currentIndexMonth = 0;
    } else {
        currentIndexMonth++;
    }
    showInfo();
    showMonth();
})

btnActive.addEventListener('click', () => {
    currentIndexMonth = monthNew;
    showInfo();
    showMonth();
})

btnPrev.addEventListener('click', () => {
    if (currentIndexMonth <= 0) {
        currentIndexMonth = 11;
    } else {
        currentIndexMonth--;
    }
    showInfo();
    showMonth();

})


let info = [];




document.addEventListener('DOMContentLoaded', function (event) {
    try {
        fetch('assets/json/calendar.json')
            .then(res => res.json())
            .then(data => {
                info = data;
                showInfo(info);
                showMonth(info);
                showTour(info);
            })
    } catch (error) {
        console.log("Ошибка" + error.message);
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


function showMonth() {
    document.getElementById("month-prev").textContent = `${info[(currentIndexMonth-1)<0 ? 11 :currentIndexMonth-1].month}`;
    document.getElementById("month-now").textContent = `${info[currentIndexMonth].month}`;
    document.getElementById("month-next").textContent = `${info[(currentIndexMonth+1)>=12 ? 0 :currentIndexMonth+1].month}`;
}

number.addEventListener('input', () => {
    let sum = document.getElementById("modal__price-sum").innerText = `${Number(info[currentIndexMonth].price.replace(/[^0-9]/g,""))* number.value} ${(currentIndexMonth === 0|| currentIndexMonth === 2|| currentIndexMonth ===10)?"долларов"
            :(currentIndexMonth === 1|| currentIndexMonth===3||currentIndexMonth===5|| currentIndexMonth===8|| currentIndexMonth===9)?"евро"
            :(currentIndexMonth === 4|| currentIndexMonth===6|| currentIndexMonth===7|| currentIndexMonth===11)?"рублей": "" }`;
})

function showTour() {
    let dates = document.getElementById("modal__title-datas").innerText = info[currentIndexMonth].dates;
    let tour = document.getElementById("modal__title-name").innerText = info[currentIndexMonth].country;
    document.getElementById("modal__price-sum").innerText ="";


}

btnInfo.addEventListener('click', () => {
    modal.style.display = 'block';
    showTour();
});
btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
    number.value = "";
});
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        number.value ="";
    }
});

//форма с главной страницы
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', sendForm);
    async function sendForm(e) {
        e.preventDefault();
        //имя
        if (!nameInput.value) {
            nameInput.classList.add('error');
            errorName.textContent = 'Введите имя';

        }
        //эмейл
        if (!emailInput.value) {
            emailInput.classList.add('error');
            errorEmail.textContent = 'Введите эмейл';
        }
        //телефон
        if (!telephoneInput.value) {
            telephoneInput.classList.add('error');
            errorTelephone.textContent = 'Введите номер телефона';
        }
        //валидация эмейла
        if (!validateEmail(emailInput.value)) {
            errorEmail.textContent = 'эмейл не содержит всех необходимых символов. Проверьте еще раз!'
        }
        //валидация телефона
        if (!validateTelephone(telephoneInput.value)) {
            errorTelephone.textContent = 'Некорректный номер телефона. Пример: +7(904)567-89-43';
        }
        else {
            //имя
            nameInput.classList.remove('error');
            errorName.textContent = '';
            console.log(nameInput.value);
            //Записываем имя в localstorage
            window.localStorage.setItem('name', JSON.stringify(nameInput.value));
            //эмейл
            emailInput.classList.remove('error');
            errorEmail.textContent = '';
            console.log(emailInput.value);
            //Записываем эмейл в localstorage
            window.localStorage.setItem('email', JSON.stringify(emailInput.value));
            //телефон
            telephoneInput.classList.remove('error');
            errorTelephone.textContent = '';
            console.log(telephoneInput.value);
            //Записываем телефон в localstorage
            window.localStorage.setItem('phone', JSON.stringify(telephoneInput.value));
            //сообщение о том что форма отправлена
            formMessage.textContent = 'Данная форма отправлена';
            //очищаем форму
            form.reset();
        }
    }
    //функция теста email
    function validateEmail(input) {
        let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regexEmail.test(input);
    }
    //функция проверки на мобильный номер
    function validateTelephone(phone) {
        let regexTel = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
        return regexTel.test(phone);
    }
})