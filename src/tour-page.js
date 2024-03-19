
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
    const url = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;
    const weatherElement = document.getElementById('weather');

    fetch('assets/json/tours.json')
        .then(response => response.json())
        .then(data => {
            const toursId = localStorage.getItem('toursId'); // Получаем toursId из localStorage
            const tourObject = data.find(item => item.id === toursId); 

            if (tourObject) {
                city = tourObject.weather; 
                getWeather(); 
            } else {
                console.error('Не удалось найти объект с toursId в файле tours.json');
            }
        })
        .catch(error => {
            console.error('Произошла ошибка при загрузке tours.json:', error);
        });

    // Функция для получения погоды
    function getWeather() {
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
const toursid = localStorage.getItem('toursid');

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
    const expElement = document.querySelector('.expectation__text');
    const littleElement = document.querySelector('.expectation__card-littletext');
    

      // Обновляем содержимое div элементов
    if (headerElement) {
        headerElement.textContent = tour.city;
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

    const imgElement = document.querySelector('.screensaver__img');
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