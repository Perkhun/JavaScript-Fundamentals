//Task 1
/*Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери 
елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.*/



/*function sumSliceArray(arr, first, second) {
     let i = 0;
    for (arr[i] of arr) {
        if(typeof first !== "number" || typeof second !== "number" || typeof arr[i] !== "number") {
            throw new Error ("Please, input correct type of data");
        }    
    }
   
    if(first < 1 || second < 1 || first > arr.length || second > arr.length) {
        throw new Error ("Be attantive, first/second number or both are bigger that length of array!");
    }

     for(let i = first - 1; i <= arr.length; i++) {
        for(let j = second - 1; j <= arr.length; j++) {
            return arr[i] + arr[j];
        }
    }

}

try {
    let result = sumSliceArray([1, 2, 8, 4, 3, 3, 4], 2, 4);
    console.log(result);   
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}
*/


//Task 2
/*Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) 
та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
Kористувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки 
    Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. 
    У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та 
    опису помилки.*/



/*function ckeckAge() {
  let name = prompt("What is your name?");
  if(name === "") {
    throw new Error("The field is empty! Please enter your correct name");
  }
  let age = prompt("What is your age?");
  if(age === "") {
    throw new Error("The field is empty! Please enter your correct age");
  }
  let status = prompt("What is your status?");
  if(status === "") {
    throw new Error("The field is empty! Please enter your correct status");
  }

  //alert(`Your name ${name}, your correct age ${age} and your responsible status is ${status}`);
  //if (name === "" || age === "" || status === "") {
  //  throw new Error("The field is empty! Please enter your correct data");
  //} 
  
  if (age < 18 || age > 70) {
    throw new RangeError("Please enter a valid age between 18 and 70.");
  }

  age = parseInt(age);
  if(isNaN(age)) {
    throw new Error("You input uncorrect type of age");
  }
  
  status = status.toLowerCase();
  if (
    !(status === "адмін" || status === "модератор" || status === "користувач")
  ) {
    throw new EvalError(
      "Please enter a valid status: адмін, модератор, or користувач."
    );
  }

  alert(`Your name ${name}, your correct age ${age} and your responsible status is ${status} \n You can see the movie`);
}

try {
  ckeckAge();
} catch (exception) {
    alert(exception);
}*/



//Task 3
/*Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height 
і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові 
параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.*/



/*function calcRectangleArea(width, height) {
  if (typeof width !== "number" || typeof height !== "number") {
    throw new Error("You use uncorrect type of data, type must be number.");
  }
  return width * height;
}
try {
  let result = calcRectangleArea(true, 4);
  console.log(result);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
}*/



//Task 4
/*Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн 
у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));
May
console.log(showMonthName(14));
MonthException Incorrect month number*/



/*class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }

  const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthes[month - 1];
}

try {
  console.log(showMonthName(5));
} catch (error) {
  console.log(error.name, error.message);
}*/



//Task 5
/*Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() 
кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. 
Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]*/



 /*function showUser(id) {
    if(id < 0) {
        throw new Error("You input uccorect id. \n Please input true id");
    }
    const user = {
        "id" : id
    }
    return user;
 }

 function showUsers(ids) {
    const users = [];
    try {
        for (let id of ids) {
            users.push(showUser(id))
        }     
    } catch (error) {
        console.log(error);     
    }

    return users;
 }

 try {
    console.log(showUsers([7, 12, 44, 22]));    
 } catch (error) {
    console.log(error);
 }*/