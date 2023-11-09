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
// const base = 2; - число
// const power = 5; - ступінь
// const result = Math.pow(base, power); - операція зведення
// console.log(result)

// Генерація псевдовипадкового числа
// Math.random() - метод повертає довільне число від 0 до 1 при кожному виконанні скрипта
// Math.round() - математичне зоакруглення числа в дужках
// Math.random() * (max - min) + min - формула генерації псевдовипадкового числа в діапазоні
// const max = 100; - вказуємо максимальне число
// const min = 1; - вказуємо мінімальне число
// const result = Math.round(Math.random() * (max - min) * min); - застосовуємо формулу і метод заокруглення
// console.log(result);

// Робота з рядками
// .length - властивість яка повертає кількість символів в рядку
// const message = 'В цьому рядку 25 символів';
// console.log(message.length);

// Конкатенація (об'єднання) рядків
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const type = 'VIP';
// const room = 716;
// const message = `Гість ${firstName} ${lastName} заселяється до ${type} номера ${room}`;
// console.log(message);

// // Нормалізація вводу
// let brand = 'SamSUnG';
// brand = brand[0] + brand.slice(1).toLowerCase(); до першого індексу додаємо решту іприводимо до нижнього регістру
// console.log(brand);
