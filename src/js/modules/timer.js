    //задаем конечную дату
    const endDate = new Date("20 February, 2025, 23:59:59");
    //элементы таймера
    const daysEl = document.querySelector("#days");
    const hoursEl = document.querySelector("#hours");
    const minutesEl = document.querySelector("#minutes");
    const secondEl = document.querySelector("#seconds");
    //функция обновления таймера
    const updateTimer = () => {
        const currentDate = new Date();
        const difference = endDate - currentDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000 );

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondEl.textContent = seconds;
        
        //условие, если длительность таймера меньше нуля, то остановить таймер
        if (difference < 0) {
            daysEl.textContent = "0";
            hoursEl.textContent = "0";
            minutesEl.textContent = "0";
            secondEl.textContent = "0";
            clearInterval(timerInterval);
            return;
        }
    };
    
    updateTimer();
    
    const timerInterval = setInterval(updateTimer, 1000);
