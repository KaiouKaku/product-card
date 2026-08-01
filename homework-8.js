// №3 Создал объект на основе своих данных.
const person = {
    name: "Danil",
    surname: "Vakhtel",
    age: 24,
    mail: "796311@gmail.com",
    job: "Student",
    country: "Russia",
    city: "Moscow",
    hobby: "Learning IT"
}
//№4 Добавил данные авто и владельца авто из прошлого задания.
const carInfo = {
    brand: "Mazda",
    model: "Tribute",
    yearManufacture: 2000,
    color: "red",
    transmission: "hybrid"
}
carInfo.owner = person;
//№5 Написал функцию, которая добавляет макс. скорость, если ее нет.
function getMaxSpeed(myCar) {
    if ("maxSpeed" in myCar) {
        return;
    }
    myCar.maxSpeed  = 200;
}
getMaxSpeed(carInfo);
console.log(carInfo);
//№6 Написал функцию, которая получает объект, его свойство и выводит его.
function getValueObject(object, propertyObject) {
    console.log(object[propertyObject]);
}
getValueObject(carInfo, 'model');
//№7 Создал массив с названиями продуктов.
const listProducts = ['apple', 'pear', 'pineapple'];
//№8 Создал массив из трех игр и запушил в конце еще одну.
const listGames = [
    {
        title: "World of warcraft",
        yearManufacture: 2004,
        developer: "Blizzard",
        designer: "Rob Pardo",
        genre: "MMORPG"
    },
    {
        title: "Dota 2",
        yearManufacture: 2013,
        developer: "Valve",
        designer: "Ice Frog",
        genre: "MOBA"
    },
    {
        title: "PUBG",
        yearManufacture: 2017,
        developer: "PUBG studios",
        designer: "Brendan Greene",
        genre: "Battle Royale"
    }
];
listGames.push({
    title: "Rust",
    yearManufacture: 2018,
    developer: "Facepunch Studios",
    designer: "Maurino Berry",
    genre: "Survival Game"
});
console.log(listGames);
//№9 Создал массив из трех игр вселенной Warcraft и объеденил их с массивом из игр восьмого задания оператором.
const warcraftGameUniverse = [
    {
        title: "Warcraft: Orcs & Humans",
        yearManufacture: 1994,
        developer: "Blizzard",
        designers: ["Ron Millar", "Stu Rose"],
        genre: "RTS"
    },
    {
        title: "Warcraft II: Tides of Darkness",
        yearManufacture: 1995,
        developer: "Blizzard",
        designers: ["Bill Roper", "Chris Metzen", "Ron Millar"],
        genre: "RTS"
    },
    {
        title: "Warcraft III: Reign of Chaos",
        yearManufacture: 2002,
        developer: "Blizzard",
        designers: ["Rob Pardo", "Chris Metzen", "Allen Adham"],
        genre: "RTS" 
    }
];

const allGames = [...warcraftGameUniverse, ...listGames];
console.log(allGames);
//№10 Написал функцию, принимающую массив задания 9 и добавил свойство isRare для проверки редкости игр.
function getRareGame(variousGames) {
    return variousGames.map(game => {
        return {
            ...game,
            isRare: game.yearManufacture < 2000
        }
    });
}
const checkRareGame = getRareGame(allGames);
console.log(checkRareGame);