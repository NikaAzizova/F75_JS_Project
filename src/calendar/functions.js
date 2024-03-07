import { name,tel,email,number } from "./vars";

export let generalError = function(text){
    let error = document.createElement('div');
            error.className = "message-error";
            error.innerHTML = text;
            return error;
}

export function validateName(){
    const nameValue = name.value;
    const nameRegExp = /[А-Я][а-я]+\s[А-Я][а-я]+/;
    if(nameRegExp.test(nameValue)|| nameValue === ""){
        hasError=false;
    }else{
        let error = document.createElement('div');
        error.className = "message-error";
        error.innerHTML = "Имя должно содержать только буквы";
        name.after(error);
        hasError = true; 
    }
}
export function validateEmail(){
    const emailValue = email.value;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegExp.test(emailValue) || emailValue === ""){
        hasError = false;
    }else{
        let error = document.createElement('div');
        error.className = "message-error";
        error.innerHTML = "Некорректный формат";
        email.after(error);
        hasError = true;
    }
};
export function validatePerson(){
    if(number.validity.rangeOverflow){
        let max = number.getAttribute("max");
        let error = generalError(' Максимальное значение не может быть больше чем ' + max);
        number.after(error);
        hasError = true;
    }
    if(number.validity.rangeUnderflow){
        let min = number.getAttribute("min");
        let error = generalError('Минимальное значение не может быть больше чем ' + min );
        number.after(error);
        hasError = true;
    }
    if(number.value ===""){
        let error = document.createElement('div');
        error.className = "message-error";
        error.innerHTML = "Это поле не заполнено";
        number.after(error);
        hasError = true;
    }
}
export function validateTel(){
    const telValue = tel.value;
    const telRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if(telRegExp.test(telValue) || telValue === ""){
        hasError = false;
    }else{
        let error = document.createElement('div');
        error.className = "message-error";
        error.innerHTML = "Некорректный формат";
        tel.after(error);
        hasError = true;
    }
}