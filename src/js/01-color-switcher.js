const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;
btnStart.disabled = false;

const setBackground = () => {
    timerId = setInterval(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.background = "#" + randomColor;
    }, 1000);
    btnStart.disabled = true;
}

btnStart.addEventListener('click', setBackground);
btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled = false;
});
