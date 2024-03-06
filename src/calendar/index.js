const dataNew = new Date();
const monthNew = dataNew.getMonth();
let currentIndexMonth = monthNew;
const btnPrev = document.getElementById("btn__prev");
const btnActive = document.getElementById("btn__active");
const btnNext = document.getElementById("btn__next");
const btnInfo = document.getElementById("info__btn");
const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("modal__close")[0];
const confirmForm= document.forms.confirmForm;
const inputs = document.querySelectorAll('.input');
let hasError = false;

   let name = confirmForm.elements.name;
    let tel = confirmForm.elements.tel;
    let email = confirmForm.elements.email;
    let number = confirmForm.elements.number;
   


    let generalError = function(text){
        let error = document.createElement('div');
                error.className = "message-error";
                error.innerHTML = text;
                return error;
    }

    function validateName(){
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
    function validateEmail(){
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
    function validatePerson(){
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
    function validateTel(){
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


confirmForm.addEventListener('submit',function(evevnt){
    evevnt.preventDefault();
    let hasError = false;
   
   

let errors = document.querySelectorAll('.message-error');
for(let i = 0; i<errors.length; i++){
    errors[i].remove();
}


    for( let i = 0; i< inputs.length; i++){
        if(!inputs[i].value){
            let error = generalError(' Это поле не заполнено.')
            inputs[i].after(error);
            hasError = true;
        } 
    }
    
    validateEmail();
    validatePerson();
    validateName();
    validateTel();
 
    if(hasError === false){
        let  bookingData = {
            name:name.value,
            tel:tel.value,
            email:email.value,
            tour: document.getElementById("modal__title-name").textContent,
            dates:document.getElementById("modal__title-datas").textContent,
            numberPerson: number.value,
            sum:document.getElementById("modal__price-sum")
            };
        console.log(bookingData);
        confirmForm.submit();
        alert('Форма успешно отправлена!');
    }
})




btnNext.addEventListener('click',()=>{
    if( currentIndexMonth >= 11){
        currentIndexMonth=0;
    }else{
currentIndexMonth++;
    }
showInfo();
showMonth();
}) 

btnActive.addEventListener('click',()=>{
    currentIndexMonth = monthNew;
    showInfo();
    showMonth();
    }) 

btnPrev.addEventListener('click',()=>{
        if( currentIndexMonth <=0){
            currentIndexMonth=11;
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
            showTour(info);
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
    document.getElementById("month-prev").textContent = `${info[(currentIndexMonth-1)<0 ? 11 :currentIndexMonth-1].month}`;
    document.getElementById("month-now").textContent = `${info[currentIndexMonth].month}`;
    document.getElementById("month-next").textContent = `${info[(currentIndexMonth+1)>=12 ? 0 :currentIndexMonth+1].month}`;
}


function showTour(){
   let dates= document.getElementById("modal__title-datas").innerText= info[currentIndexMonth].dates;
   let tour = document.getElementById("modal__title-name").innerText = info[currentIndexMonth].country;
   let sum =  document.getElementById("modal__price-sum").innerText = `${info[currentIndexMonth].price.replace(/[^0-9]/g,"")}`;
  
}

btnInfo.addEventListener('click',()=>{
modal.style.display='block';
showTour();
});
btnClose.addEventListener('click',()=>{
    modal.style.display='none';
});
window.addEventListener('click',function(event){
    if(event.target == modal){
        modal.style.display='none';
    }
});


