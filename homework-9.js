import { userComments } from "./comments.js";

//№2 Создал массив из 10 чисел и с помощью метода filter() создал новый массив, в котором будут только числа больше или равные 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter(num => num >= 5);
console.log(newArray);
//№3 Создал массив строк и через метод includes() проверил наличие определенной строки в массиве.
const kitchenUtensils = [ "fork", "knife", "spoon", "mug", "plate", "cup" ];
const findDevice = kitchenUtensils.includes("mug");
console.log(findDevice);
//№4 Создал функцию, которая принимает массив и возвращает его в обратном порядке.
function reverseArray(array) {
    return array.reverse();
};
const reverseNumbers = reverseArray(numbers);
const reverseKitchenUtensils = reverseArray(kitchenUtensils);
console.log(reverseNumbers);
console.log(reverseKitchenUtensils);
//№7 Создал новый массив из объектов, в котором будут только те объекты, у которых email содержит ".com".
const findComment = userComments.filter(comment => comment.email.includes(".com"));
console.log(findComment);
//№8 Создал новый массив из объектов, в котором первые 5 объектов будут иметь postId = 2, а остальные postId = 1.
const updatedComments = userComments.map(comment => {
    if (comment.id <= 5) {
        return { ...comment, postId: 2 };
    }   else {
        return { ...comment, postId: 1 };
    }
});
console.log(updatedComments);
//№9 Создал новый массив из объектов, в котором будут только id и name.
const shortUserComment = userComments.map ( comment => ({ id: comment.id, name: comment.name }));
console.log(shortUserComment);
//№10 Создал новый массив из объектов, в котором будет новое свойство isInvalid, которое будет true, если длина body больше 180 символов, и false в противном случае.
const sortingUserComments = userComments.map(comment => {
    if (comment.body.length > 180) {
        return { ...comment, isInvalid: true };
    }   else {
        return { ...comment, isInvalid: false };
    }
});
console.log(sortingUserComments);
//№11 Перебрал массив с помощью метода reduce() и map(), в котором будет только email каждого комментария.
const mailArrayReduce = userComments.reduce((acc, comment) => {
    return [...acc, comment.email];
}, []);
console.log(mailArrayReduce);

const mailArrayMap = userComments.map(comment => comment.email);
console.log(mailArrayMap);
//№12 Привел к строке массив с задания 11.
const mailArrayString = mailArrayMap.join(", ");
console.log(mailArrayString);