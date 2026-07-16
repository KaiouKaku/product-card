const productsCards = document.querySelectorAll('.card');
const changeColorsAllCardsButton = document.querySelector('#change-colors-all-cards');
const purpleColorHash = '#bb00ff';
const orangeColorHash = '#ff6600';
const youtubeURL = 'https://www.youtube.com';

changeColorsAllCardsButton.addEventListener('click', () => {
    productsCards.forEach((productCard) => productCard.style.backgroundColor = purpleColorHash)
})

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = orangeColorHash;
})

const openYoutubeButton = document.querySelector('#open-youtube');

openYoutubeButton.addEventListener('click', openYoutube)

function openYoutube() {
    const answer = confirm('Вы действительно хотите открыть Youtube?');

    if (answer === true) {
        window.open(youtubeURL)
    } else { 
        return;
    }
}

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

const outputContentElement = document.querySelector('.title');

outputContentElement.addEventListener('mouseenter', () => {
    console.log(outputContentElement.textContent)
})

const button = document.getElementById('change-color-this-button');

button.addEventListener('click', () => {
    button.classList.toggle('active')
})
