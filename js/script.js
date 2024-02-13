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
// const option = 1;
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

// Цикл for
// for (ініціалізація; умова; пост - вираз) {
//     тіло циклу
// }
// Цикл складається з ітерацій (повторів). Спочатку вказується ініціалізація (початкове значення), яка виконується один раз
// далі вказується умова припинення, яка перевіряється перед кожним виконанням тіла циклу. Якщо умова повертає false, цикл припиняэться.
// в пост-виразі збільшуємо, або зменшуємо лічильник.
// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
// }

// Написати скрипт який підраховує загальну суму зарплат робітників
// кількість робітників зберігається у змінній employees
// зарплата кожного робітника це випадкове число выд 500 до 5000
// записати суму у змінну totalSalary та вивести в консоль
// 1. зробити змінні
// const minSalary = 5000;
// const maxSalary = 50000;
// const employees = 10;
// let totalSalary = 0;
// // 2. перебрати робітників у циклі
// for (let i = 1; i <= employees; i += 1) {
//   // 3. сгенерувати випадкову зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП робітника номер ${i} - ${salary}`);
//   // 4. додати до totalSalary
//   totalSalary += salary;
// }
// // 5. лог
// console.log(`totalSalary:`, totalSalary);

// Написати скрипт який підраховує суму всіх парних чисел,
// які входять в діапазон чисел у змінних min та max.
// 1 зробити змінні
// const min = 0;
// const max = 5;
// let total = 0;
// // 2 перебрати числа від min до max з кроком в 1
// for (let i = min; i <= max; i += 1) {
// //   console.log(i);
//   // 3 перевіряємо залишок від ділення
//   if (i % 2 === 0) {
//     console.log('парне: ', i);
//     // 4 записуємо до суми
//     total += i;
//   }
// }
// console.log('total: ', total);
// рішення від зворотнього. Спочатку перевіряється поганий кейс, у випадку його виконання ітерація пропускається, у випадку невиконання виконується решта коду
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log('не парне: ', i)
//         continue; - перериває поточну ітерацію
//     }
//     console.log('парне: ', i)
//     total += i;
// }
// console.log('total: ', total)

// Написати скрипт обробки покупки в магазині
// баланс зберігається в змінній balance
// сума покупки в змінній payment
// Перед перевіркою вивести повідомлення:
// "Загальна вартість замовлення [число] кредитів. Перевіряємо кількість доступних коштів на рахунку"
// Якщо сума покупки не перевищує баланс:
// - відняти від балансу суму покупки
// - вивести повідомлення "На рахунку залишилось [число] кредитів"
// Якщо сума перевищує баланс:
// - вивести повідомлення "На рахунку недостатньо коштів для проведення операції!"
// В кінці вивести повідомлення "Операція завершена".
// let balance = 10000;
// const payment = 2000;
// console.log(
//   `Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`,
// );
// if (payment <= balance) {
//     balance -= payment
//     console.log(`На рахунку залишилось ${balance} кредитів`);
// } else {
//     console.log(`На рахунку недостатньо коштів для проведення операції!`);
// }
// console.log(`Операція завершена`);

// Написати скрипт підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час.
// загальна сума витрат зберігається в змінній totalSpent
// сума поточного платежу зберігається в змінній payment
// знижка зберігається в змінній discount
// Якщо витрачено:
// - від [100 до 1000) - бронзовий партер, знижка 2%
// - від [1000 до 5000) - срібний партнер, знижка 5%
// - більше [5000 - золотий партнер, знижка 10%
// - менше 100) не партнер, знижка 0%
// В результаті вивести повідомлення
// "Оформлюємо замовлення на суму [сума] зі знижкою [знижка]"
// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log(`Бронзовий партер, знижка 2%`);
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log(`Срібний партер, знижка 5%`);
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log(`Золотий партнер, знижка 10%`);
//   discount = 0.1;
// } else {
//   console.log(`Не партнер, знижка 0%`);
// }
// payment -= payment * discount
// console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);
// totalSpent += payment;
// console.log(`Загальна сума витрат в магазині ${totalSpent}`)

// Масив - можливість зберігати колекцію однотипних даних, є складним типом
// При створенні складних типів, створюється комірка в пам'яті, а при зверненні до нього звернення іде за посиланням на цю комірку

// console.table(friends); - зручний перегляд масивів
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// friends[1] = 'Apple'; зміна елементу масиву
// console.table(friends);
// const lastIndex = friends.length - 1; - знаходження останнього індексу
// friends[2]; звернення до елементу масиву
// console.log(friends[2]); вивід в консоль елеманта масиву
// friends[2] = 'John' - зміна елемента масиву

// Перебір масиву
// за допомогою циклу for
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
// }

// зміна елементів масиву за допомогою циклу for
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1';
// }
// console.table(friends);

// за допомогою циклу for of. Використовується коли не потрібен доступ до індексу, або не потрібно змінювати елемент масиву
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (const friend of friends) {
//     console.log(friend)
// }

// Порахувати загальну суму покупок в кошику
// const cart = [54, 28, 105, 70, 92, 17, 120, 15, 28, 64, 554, 214, 248];
// 2. Створити змінну total до циклу
// let total = 0;
// // 1. Перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);
//   // 3. Кожен елемент масиву додати до total
//   total += cart[i];
// }
// console.log(`Загальна сума покупок ${total} грн.`);

// Рішення за допомогою for of
// const cart = [54, 28, 105, 70, 92, 17, 120, 15, 28, 64, 554, 214, 248];
// let total = 0;
// for (const value of cart) {
//   total += value;
// }
// console.log(`Загальна сума покупок ${total} грн.`);

// Приклад зі зміною елементів масиву
// const cart = [54, 28, 105, 70, 92, 17, 120, 15, 28, 64, 554, 214, 248];
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

// Написати скрипт який рахує суму всіх парних чисел у масиві
// Рішення за допомогою циклу for
// const numbers = [54, 28, 105, 70, 92, 17, 120, 15, 28, 64, 554, 214, 248, 111];
// // 1. Зробити змінну total
// let totalEven = 0;
// let total = 0;
// // 2. Перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//   console.log(number);
//   // 3. На кожній ітерації перевірити елемент на парність
//   if (number % 2 === 0) {
//     console.log('Парне');
// 4. якщо парне - додаємо до totalEven
//     totalEven += number;
//   } else {
//     console.log('Не парне');
//     total += number;
//   }
// }
// console.log(`Сума парних чисел ${totalEven}`);
// console.log(`Сума непарних чисел ${total}`);

// const numbers = [54, 28, 105, 70, 92, 17, 120, 15, 28, 64, 554, 214, 248, 111];
// let total = 0;
// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log('Парне');
//     total += number;
//   }
// }
// console.log(`Сума парних чисел ${total}`);

// Рішення від зворотнього
// const numbers = [54, 28, 105, 70, 92, 17, 120, 15, 28, 64, 554, 214, 248, 111];
// let total = 0;
// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 !== 0) {
//     console.log('Пропустити цю ітерацію', number);

//     continue;
//   }
//   total += number;
// }
// console.log(`Сума парних чисел ${total}`);

// Написати скрипт пошука логіна. Якщо логіна немає, вивести повідомлення
// `Користувача ${} не знайдено`.Якщо логін є, `Користувача ${} знайдено`
// Рішення за допомогою циклу for
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4axth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Користувача ${loginToFind} знайдено`;
//     break;
//   }
//   message = `Користувача ${loginToFind} не знайдено`;
// }
// console.log(message);

// Рішення за допомогою for of
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4axth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувача ${loginToFind} знайдено`;
//     break;
//   }
//   message = `Користувача ${loginToFind} не знайдено`;
// }
// console.log(message);

// Рішення з використанням методу .includes
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4axth3m4n'];
// const loginToFind = 'poly1scute';
// console.log(logins.includes(loginToFind));

// Використання тернарного оператора
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4axth3m4n'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind)
//   ? `Користувача ${loginToFind} знайдено`
//   : `Користувача ${loginToFind} не знайдено`;
// console.log(message);

// Написати скрипт пошуку найменшого числа в масиві, за умови, що числа унікальні
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('Найменше число', smallestNumber);

// Написати скрипт, який об'єднує всі елементи масиву в одно рядкове значення. Елементів може бути довільна кількість
// Елементи масиву розділені комою.

// Рішення за допомогою for of
// const friends = ['Mango', 'Polly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// // Рышення за допомогою методу.join (не деструктивний метод)
// const friends = ['Mango', 'Polly', 'Kiwi', 'Ajax'];
// let string = friends.join(',');
// console.log(string)

// Написати скрипт, який змінює регістр кожного символу в рядку на протилежний. Наприклад рядок "JavaScript" змінюється на "jAVAsCRIPT"
// Рішення за допомогою методу .split

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  // console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log(`Ця літера в нижньому регістрі - ${letter}`);
  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log(`Ця літера у верхньому регістрі - ${letter}`);
  //   invertedString += letter.toLowerCase();
  // }

  // Рішення за допомогою тернарного оператора
  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(`invertedString: ${invertedString}`);
