
const button = document.querySelector('.offer__button')
const div = document.querySelector('.expectation')

button.addEventListener('click', makeCLick);

function makeCLick() {
    div.scrollIntoView({ 
        block: 'nearest',
        behavior: 'smooth', 
    })
}


document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '85f30b8095b94031bbf193620241503';
    let city = ''; // Название города из файла tours.json
    const weatherElement = document.getElementById('weather');

    fetch('assets/json/tours.json')
        .then(response => response.json())
        .then(data => {
            const toursid = localStorage.getItem('currentIndex'); // Получаем currentIndex из localStorage
            const tourObject = data.find(item => item.id === toursid); 

            if (tourObject) {
                city = tourObject.weather; 
                const url = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;
                getWeather(url); // Вызываем функцию для получения погоды с обновленным URL
            } else {
                console.error('Не удалось найти объект с toursId в файле tours.json');
            }
        })
        .catch(error => {
            console.error('Произошла ошибка при загрузке tours.json:', error);
        });

    // Функция для получения погоды
    function getWeather(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temperature = data.current.temp_c;
                // Вывод данных о погоде
                weatherElement.textContent = temperature + '°C';
            })
            .catch(error => {
                console.error('Произошла ошибка при запросе погоды:', error);
            });
    }
});


// Получаем значение ключа toursid из localstorage
const toursid = localStorage.getItem('currentIndex');

// Загружаем файл tours.json
fetch('assets/json/tours.json')
.then(response => response.json())
.then(data => {
    // Находим объект с соответствующим id
    const tour = data.find(item => item.id === toursid);

    if (tour) {
      // Находим div элементы на странице
    const headerElement = document.querySelector('.screensaver__header');
    const textElement = document.querySelector('.screensaver__text');
    const textTwoElement = document.querySelector('.offer__text-main');
    const expElement = document.querySelector('.expectation__ul');
    const littleElement = document.querySelector('.expectation__card-littletext');
    const textlittle = document.querySelector('.offer__text-little');
    const dateElement = document.querySelector('.offer_circle-text2');
    const priceElement = document.querySelector('.offer_circle-text3');
    const gidElement = document.querySelector('.offer_circle-text4');
    const expectationElement = document.querySelector('.expectation__text');
    const endElement = document.querySelector('.expectation__end-text');
    const cardName = document.querySelector('.expectation__card-name');
    const cardText = document.querySelector('.expectation__card-text');

      // Обновляем содержимое div элементов
    if (headerElement) {
        headerElement.textContent = tour.city;
    }

    if (cardText) {
        cardText.textContent = tour.gid_info;
    }

    if (textElement) {
        textElement.textContent = tour.title;
    }
    if (textTwoElement) {
        textTwoElement.textContent = tour.text;
    }

    if(expElement) {
        expElement.textContent = tour.waiting;
    }

    if(littleElement) {
        littleElement.textContent = tour.gid;
    }

    if(textlittle) {
        textlittle.textContent = tour.tittlelittle;
    }

    if(dateElement) {
        dateElement.textContent = tour.dates;
    }

    if(priceElement) {
        priceElement.textContent = tour.priceall;
    }

    if(gidElement) {
        gidElement.textContent = tour.gid;
    }

    if(expectationElement) {
        expectationElement.textContent = tour.expectation;
    }

    if(endElement) {
        endElement.textContent = tour.end;
    }

    if(cardName) {
        cardName.textContent = tour.gid_name;
    }

    const imgElement = document.querySelector('.expectation__card-img');
    if (imgElement) {
        imgElement.src = tour.gid_img;
    }

      // Дополнительные действия по обновлению информации на странице можно добавить здесь
    } else {
    console.error('Тур с указанным id не найден');
    }
})
.catch(error => {
    console.error('Произошла ошибка при загрузке данных:', error);
});