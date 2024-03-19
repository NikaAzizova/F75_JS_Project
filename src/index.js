//Главная страница
import {
    nameInput,
    emailInput,
    telephoneInput,
    errorName,
    errorEmail,
    errorTelephone,
    formMessage
} from "./vars";

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

//бургер меню
import {makeBurgerMenuVisible, makeBurgerDisapear} from './functions';
import{burgetIcon,burgerCross} from './vars';
burgetIcon.addEventListener('click', makeBurgerMenuVisible);
burgerCross.addEventListener('click' ,makeBurgerDisapear);

