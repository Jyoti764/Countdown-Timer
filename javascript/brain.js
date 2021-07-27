let countdown;
const timerDisplay = document.querySelector('.displayTimeLeft');
const endTime = document.querySelector('.displayEndTime');



function timer(seconds) {
    
    clearInterval(countdown);
    const then = Date.now() + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const displayTime = `${minutes}:${remainingSeconds < 10 ? '0' :''}${remainingSeconds}`;
    document.title = displayTime;
    timerDisplay.textContent = displayTime;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const mins = end.getMinutes();
    endTime.textContent = `Return  at ${adjustedHour}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    timer(minutes * 60);
    this.reset();
});