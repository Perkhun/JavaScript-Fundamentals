/* TASK 2
Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом 
та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати 
об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку: */

module.exports = function (user) {
    return `Date of request: ${Date()} \n Good evening, ${user}` ;
};
