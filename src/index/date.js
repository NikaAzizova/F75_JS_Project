document.addEventListener('DOMContentLoaded', function() {
    const result = document.querySelector('.datenow');
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    result.textContent = `${day}/${month+1}`;
    if(day.toString().length == 1) {
        result.textContent = `0${day}/${month+1}`;
    } else if(month.toString().length == 1) {
        result.textContent = `${day}/0${month+1}`;
    } else if(day.toString().length == 1 && month.toString().length == 1) {
        result.textContent = `0${day}/0${month+1}`;
    } else {
        result.textContent = `${day}/${month+1}`;
    }
    })
    
    

