// Додавати type="modele" до тегу script - дає можливість використовувати однакові назви змінних в різних файлах скрипта

// Типи даних
// const age = 10 - числовий літерал
// const totalPrice = 200.74 - число з рухомою крапкою
// const userName = "Chelsy" - рядок
// const isOpen = true - boolean

// Метод typeof() - показує тип даних
// const type = typeof (те, що визначаємо); - повертає на своє місце тип даних і записує його в змінну
// console.log(type) - виводить в консоль результат роботи методу

// Виведення вікна з повідомленням
// alert('Повідомлення');

// Метод window.confirm() - показує діалогове вікно з кнопками ок і cancel
// const shouldRenew = confirm('Бажаєте продовжити підписку?'); - метод confirm повертає на своє місце результат обраний користувачем і записує його в змінну
// console.log(shouldRenew);- виводить в консоль рузультат вибору (true/false)

// Метод window.prompt() - показує діалогове вікно з інпутом, в який користувач щось вводить(завжди повертає рядок)
// const quantity = prompt('Введіть кількість товару'); - метод повертає на своє місце те, що ввів користувач (натискання ОК без вводу даних поверне порожній рядок, натискання cancel поверне null)
// console.log(quantity); - виводить результат в консоль
// let quantity = prompt('Введіть кількість товарів');
// quantity = Number(quantity); - перетворення введеного на число
// console.log(typeof quantity); - визначення типу даних

// Метод Number.parseInt() - зліва посимвольно парсить рядок зупиняючись на першому не числі(не деструктивний метод)
// let elementWidth = '50px'; - отримуємо рядок з числом і літерами
// const result = Number.parseInt(elementWidth); - робимо змінну в яку присвоюється результат роботи методу parseInt
// console.log('elementWidth:', result); - виводимо результат в консоль

// Метод Number.parseFloat() - зліва посимвольно парсить рядок до першого не числа не враховуючи крапку
// let elementHeight = '200.74px'; - отримуємо рядок з числом і літерами
// elementHeight = Number.parseFloat(elementHeight); - перевизначаємо значення за допомогою методу Number.parseFloat()
// console.log(elementHeight); - виводимо результат в консоль

// Метод toFixed() - відсікає вказану в дужках кількість символів після крапки у вигляді рядка
// let salary = 1300.16472; - отримуємо число з крапкою
// salary = salary.toFixed(2); - застосовуємо метод
// salary = Number(salary); - перетворюємо на число
// console.log(salary); - виводимо результат в консоль

// Об'єкт Math
// Зведення в ступінь, метод pow
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result)

