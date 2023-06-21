// Задание 1

const upToCub = (number) => number ** 3;
console.log(upToCub(2) + upToCub(3));

// Задание 2

const testOnString = (number) => (number == Number(number)) ? true : false;
const calcValue = (number) => number * 0.87;
let userNumber = prompt('Введите значение зарплаты');
(testOnString(userNumber)) ? console.log(`Размер заработной платы за вычетом налогов равен значение ${calcValue(userNumber)}`) : console.log('Вы ввели не число, попробуйтие еще раз');

// Задание 3

let userNumber1 = Number(prompt('Введите значение 1'));
let userNumber2 = Number(prompt('Введите значение 2'));
let userNumber3 = Number(prompt('Введите значение 3'));
const findMax = (number1, number2, number3) => (number1 > number2) && (number1 > number3) ? console.log(number1 + ' максимальное число') : (number2 > number3) ? console.log(number2 + ' максимальное число') : console.log(number3 + ' максимальное число');
findMax(userNumber1, userNumber2, userNumber3);

// Задание 4

let newUserNumber1 = Number(prompt('введите число 1'));
let newUserNumber2 = Number(prompt('введите число 2'));
const summNumbers = (number1, number2) => console.log(number1 + number2);
const minusNumbers = (number1, number2) => (number1 > number2) ? console.log(number1 - number2) : console.log(number2 - number1);
const multNumbers = (number1, number2) => console.log(number1 * number2);
const shareNumbers = (number1, number2) => console.log(number1 / number2);
summNumbers(newUserNumber1, newUserNumber2);
minusNumbers(newUserNumber1, newUserNumber2);
multNumbers(newUserNumber1, newUserNumber2);
shareNumbers(newUserNumber1, newUserNumber2);
