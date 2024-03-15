
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
    const city = 'Москва'; // Здесь должно быть название города из файла tours.json
    const url = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;
    const weatherElement = document.getElementById('weather');

    // Функция для получения погоды
    function getWeather() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
    
        xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            const response = JSON.parse(xhr.responseText);
            const temperature = response.current.temp_c;

          // Вывод данных
        weatherElement.textContent = temperature + '°C';
        } else {
        console.error('Ошибка запроса. Код статуса: ' + xhr.status);
        }
    };
    
    xhr.onerror = function() {
        console.error('Ошибка запроса');
    };
    
    xhr.send();
    }

    // Вызов функции для получения погоды
    getWeather();
});