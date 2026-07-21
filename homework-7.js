function findWeather (city, temperature) {
    console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию.`);
}
findWeather("Moscow", 29)

const LIGHT_SPEED = 299792458;

function testSpeed(speed) {
    if (speed > LIGHT_SPEED)
        console.log("Сверхсветовая скорость.");
    else if (speed < LIGHT_SPEED )
        console.log("Субсветовая скорость.");
    else
        console.log("Скорость света.");
}
testSpeed(299792458);
testSpeed(300000000);
testSpeed(200000000);

const product = "Арбуз";
const price = 3; 

function buyProduct(budget) {
    if (budget >= price)
        console.log('Арбуз приобретен.');
    else {
        const notEnoughMoney = price - budget
        console.log(`Вам не хватает ${notEnoughMoney}$, пополните баланс.`);
    }
}
buyProduct(0);
buyProduct(10);

const scales = 200;

function cargoWeight(kg) {
    if (kg < scales)
        console.log("Недовес.");
    else if (kg > scales)
        console.log("Перевес.");
    else
        console.log("Подходящий вес.");
}
cargoWeight(100);
cargoWeight(300);
cargoWeight(200);