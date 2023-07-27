//Task 1
/*Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень*/

/*function compact(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      // Перевірка, чи елемент ще не міститься в newArr та додавання його, якщо він унікальний
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  console.log(compact(arr)); // Вивід: [5, 3, 4, 6, 7]*/


//Task 2
/*Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
 початкове значення, кінцеве значення, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)*/

/*function createArray(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
}

let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]*/


//Task 3
/*Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.*/

//2 4
//2 3 3 4 4 4 

function output(a, b) {
    if(a > b) {
        [a, b] = [b, a];
    }
    for(let i = a; i <= b; i++) {
        for(let j = a; j <= i; j++) {
            console.log(i);
        }
    }
}
output(6, 9);
//console.log(output(1, 5));


//Task 4
/*Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.*/

/*function randArray(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = Math.floor(Math.random() * 500) + 1;
  }
  return arr;
}

console.log(randArray(5)); // [399,310,232,379,40]*/


//Task 5
/*Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)*/

/*function funcName(arr) {
  let modifArr = arr.flat();

  let stringArr = [];
  let numberArr = [];

  stringArr = modifArr.filter((el) => typeof el === "string");
  console.log(stringArr);

  numberArr = modifArr.filter((el) => typeof el === "number");
  console.log(numberArr);
}

let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
funcName(arr);*/


//Task 6
/*Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.*/

/*function calc(a, b, op) {
  switch (op) {

    case 1:
      console.log(a - b);
      break;

    case 2:
      console.log(a * b);
      break;

    case 3:
      console.log(a / b);
      break;

    default:
        if(typeof(op) === "number") {
            console.log(a + b);
            break;
        } else 
        console.log("Please, input correct value");
      
  }
}

calc(2, 7, 2);*/


//Task 7
/*Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.*/

/*function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

let b = findUnique([1, 2, 3, 5, 3]); // => false
let a = findUnique([1, 2, 3, 11]); // => true
console.log(b);
console.log(a);*/


//Task ***
/*(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи
переданий в неї аргумент збігається з аргументом зовнішньої функції.
const tom = create("pass_for_Tom");*/

/*function create(string) {
  const tom = function (checkString) {
    if (checkString === string) {
      return true;
    } else return false;
  };
  return tom;
}

const check = create("pass_for_Tom");
console.log(check("pass_for_Tom")); //повертає true
console.log(check("pass_for_tom")); //повертає false*/
