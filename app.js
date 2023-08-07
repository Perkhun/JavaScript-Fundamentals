// let login = prompt("What is your login?")
// let email = prompt("What is your email?")
// let password = prompt("What is your password?")

// alert(`Dear ${login}, your email is ${email}, your password is ${password}`)

// const isAdult = confirm("Are you of legal age?")
// alert(isAdult)

// const secH =  60 * 60;
// const secD =  24 * secH;
// const secM =  30 * secD;

// alert("IRA");

/*const dataTypes = {
    String: 'ira',
    Number: 5,
    Boolean: true,
    Undefined: undefined,
    Null: null,
    Big_Int: 50n
};*/

//№2

/*const validateAge = age => {
    if( age >= 18 ) {
        console.log("You are of legal age");
    } else {
    console.log("You are too young");
    }
}
validateAge(12);*/


/*const filterMostOftenNumber = (numsArr) => {
   numsArr = [1, 2, 1, 3];   //obj(frrequency) = { 1(num):2(frequency[num])  2:1  3:1}
   const frequency = {};    

  // Перебираємо масив і підраховуємо кількість входжень кожного елементу
  for (const num of numsArr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1 ;
    }
  }

  //виводимо об'єкт
  console.log(frequency);

  //пошук максимального входження значень ключа
  const maxFrequency = Math.max(...Object.values(frequency));
  //фільтруємо масив, викидаючи ключі, які мають максимальне значення
  const newArr = numsArr.filter(num =>  frequency[num] !== maxFrequency);
  console.log(newArr);
};

filterMostOftenNumber();*/


/*const primeNumbers = numsArr => {
const numbers = numsArr.filter((num) => {
    return (num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0 || num % 13 === 0)
});
    return numbers;
    //return  put the filtered array variable here 
  };

  const numsArr = [13, 2, 4, 7];
  console.log(primeNumbers(numsArr));*/

/*const triangleArea = (a, b, c) => {
  if (a + b <= c || b + c <= a || a + c <= b) {
    return "Incorrect data";
    
  } else {
    const p = (a + b + c) / 2;
    const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return S.toFixed(3);
  }
};

console.log(triangleArea(1, 2, 3));*/

/*const greetings = time => {
    if(time >= 24) {
        return "Please, input correct value";
    } else if(time === 23 || (time >= 1 && time < 5)) {
        return "Good night";
    } else if(time >= 5 && time < 11) {
        return "Good morning";
    } else if(time >= 11 && time < 17) {
        return "Good afternoon";
    } else if(time >= 17 && time < 23) {
        return "Good evening";
    }

 }
console.log(greetings(12));*/



//STUDY EXCEPTIONS 01/08
/*function enterPIN(num) {
 
  if (num.toString().length > 4) {
    throw new Error ("Line length greater than 4 characters");
  }
  return num;
}
try {
  let result = enterPIN(143444);
  console.log(result);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}
*/



//STUDY 02/08 EXTRA TASK FOR BF
/*function calculateGuests(guestsInput) {
  let stringOfNumber = "";
  for (const symbol of guestsInput) {
    if (!isNaN(parseInt(symbol))) {
      stringOfNumber += symbol;
      //break; //буде тільки перша цифра
    } else if (stringOfNumber !== "") {
      break; //буде перше число   //якщо без break, то виведе просто усі цифри
    }
  }

  if (stringOfNumber === "" || stringOfNumber === "0") {
    return "not a number";
  }

  return parseInt(stringOfNumber);
}

console.log(calculateGuests("9. or 75"));
*/