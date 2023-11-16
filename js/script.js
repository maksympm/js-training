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

// Пошук в рядку
// .includes() - повертає на своє місце true, або false, чи є в рядку шукане значення
// const blackListWord1 = 'спам';
// const blackListWord2 = 'розпродаж';
// const string1 = 'Привіт, це не спам, перейди за посиланням';
// const string2 = 'Найбільший РОЗПРОДАЖ року';
// const string3 = 'Рекламна компанія нового бренду';
// console.log(string1.includes(blackListWord1));
// console.log(string1.includes(blackListWord2));
// console.log(string2.includes(blackListWord1));
// console.log(string2.toLocaleLowerCase().includes(blackListWord2)); - спочатку приводимо до нижнього регістру, потім перевіряємо наявність шуканого слова

// Оператори порівняння
// При порівнянні, рядки приводяться до числа.
// При використанні строгого дорівнює і строгого не дорівнює не виконується приведення типів.
// Завжди використовувти строге порівняння і нестроге порівняння
// === строга рівність
// !== строга нерівність
// 6 хибних false значень(0, NaN, Null, undefined, '', false) - в булевому перетворенні завжди повернуть false

// && - логічне І. Приводить операнди до буля. Якщо всі значення true, повертається значення останнього операнда, або перше false.
// console.log(5 && 'hello' && 'false' && 8);

// || - логічне або. Зупиняється на першому true, повертаючи його, або останный операнд
// console.log(false || 0 || false || 0)

// ! - логічне "не". Унарний оператор, приводить до буля, потім робить інверсію
// console.log(!true) - виведе false

// Написати скрипт, який перевіряє входження числа у відрізок зазначений в x1 та x2
// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} входить до відрізку ${x1}? `, number < x1);
// console.log(`Число ${number} входить до відрізку більше ${x2}? `, number > x2);
// console.log(`Число ${number} входить до відрізку від ${x1} до ${x2} ? `, number > x1 && number < x2);
// console.log(`Число ${number} входить до відрізку до ${x1}, або після ${x2} ? `, number < x1 || number > x2);

// Напиши скрипт який перевіряє можливість відкрити чат з коричстувачем. Користувач має бути:
// другом
// онлайн
// без режима не турбувати
// const isOnline = true;
// const isFriend = true;
// const isDnD = false;
// const canOpenChat = isOnline && isFriend && !isDnD;
// console.log(`Чи можна відкрити чат?`, canOpenChat);

// Написати скрипт перевірки підписки користувача при доступі до контенту
// Є три типи підписки: free, pro, VIP.
// доступ мають тільки  користувачі pro і VIP
// const sub = 'VIP';
// const canAccessContent = sub === 'pro' || sub === 'VIP';
// console.log(`Чи є доступ до контенту? `, canAccessContent);
// Рішення за допомогою "if"(логічне розгалуження). В круглих дужках вказується умова, якщо результат true, виконується код в фігурних дужках,
// якщо false, виконується код в фігурних дужках після else.
// if (sub === 'pro' || sub === 'VIP') {
//   console.log ('Користувач має доступ');
// } else {
//     console.log ('Користувач не має доступу');
// }

// const salary = 11000;
// if (salary < 500) {
//     console.log('Рівень 1');
// } else if (salary > 500 && salary < 1500) {
//     console.log('Рівень 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Рівень 3');
// } else {
//     console.log('Рівень 4');
// }

// Тернарний оператор
// const message = умова ? вираз1 : вираз2
// Якщо умова виконується як true, повертається результат першого виразу, якщо як false - повертається результат другого виразу
// const ballance = -1000;
// const message = ballance >= 0 ? 'Позитивний баланс' : 'Від`ємний баланс';
// console.log(message);

// Конструкція switch використовується при порівнянні однієї змінної з різними значеннями.
// Якщо не вказати ключове слово break, скрипт буде виконуватись без перевірки умови
// Написати скрипт вибору вартості проживання по кількості зірок у готеля.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// якщо в змінній stars щось окрым 1-5, вивести рядок 'Такої кількості зірок немає'.
// const stars = 5;
// let price;
// Рішення за допомогою if.else
// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }
// Рішення за допомогою switch(значення з яким порівнюємо) {case з чим порівнюємо: тіло; brea; default: що виводити якщо не виконалося порівняння}
// const stars = 5;
// let price;
// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);

// Написати скрипт вибору вартості проживання по кількості зірок у готеля.
// // 1, 2 - 20$, 3, 4 - 30$, 5 - 120$
// // якщо в змінній stars щось окрым 1-5, вивести рядок 'Такої кількості зірок немає'.

// Рішення за допомогою if.else
// const stars = 5;
// let price;
// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }
// console.log(price);

// Рішення за допомогою switch (об'єднання кейсів)
// const stars = 5;
// let price;
// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);

// Написати скрипт вибору опції доставки товару
// Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта.
// У змінну message записати повідомлення відповідно до опції
// 'Ви можете забрати товар завтра в офісі після 12:00'
// 'Кур'єр доставить замовлення завтра з 09:00 до 18:00'
// 'Товар буде відправлено сьогодні'
// 'З вами зв'яжеться менеджер'
// const option = 2;
// let message;
// switch (option) {
//   case 1:
//     message = 'Ви можете забрати товар завтра в офісі після 12:00';
//     break;

//   case 2:
//     message = 'Кур`єр доставить замовлення завтра з 09:00 до 18:00';
//     break;

//   case 3:
//     message = 'Товар буде відправлено сьогодні';
//     break;

//   default:
//     message = 'З вами зв`яжеться менеджер';
// }
// console.log(message);
