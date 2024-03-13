export const dataNew = new Date();
export const monthNew = dataNew.getMonth();
export let currentIndexMonth = monthNew;
export const btnPrev = document.getElementById("btn__prev");
export const btnActive = document.getElementById("btn__active");
export const btnNext = document.getElementById("btn__next");
export let LinkLearnMore = document.getElementById("link__learn-more");


export  let name = confirmForm.elements.name;
export  let tel = confirmForm.elements.tel;
export  let email = confirmForm.elements.email;
export  let number = confirmForm.elements.number;
//записываем инпуты в переменные
export const nameInput = document.getElementById('name');
export const emailInput = document.getElementById('email');
export const telephoneInput = document.getElementById('telephone');
//переменные для вывода ошибок и сообщений
export const errorName = document.getElementById('error-name');
export const errorEmail = document.getElementById('error-email');
export const errorTelephone = document.getElementById('error-telephone');
export const formMessage = document.getElementById('form-message');
//Часть с бургер меню
export const burgetIcon = document.getElementById('burger-img');
export const burgerCross = document.getElementById('cross');
export const navWrapper = document.getElementById('nav-wrapper');