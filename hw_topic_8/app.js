//const text = "The next meetup on data science will be held on 2023-09-21, previously it happened on 31/03, 2023"
//const regex = /\w*(-|\/)\w*(-|(,\s))\w*/g
//const dates = text.match(regex);
//console.log(dates) //['2023-09-21', '31/03, 2023']


/*Task 1 DONE
Write a function upperCase that will check whether the first character in a string is uppercase or not.

function upperCase(string) {
  const reg = /^[A-Z]/;
  if (reg.test(string) === true) {
    return "String's starts with uppercase character";
  } else 
  return "String's not starts with uppercase character";
}

console.log(upperCase("Regexp")); */


/* Task 2 DONE
 Write a function validateEmail(email) that accepts string data and checks that it matches an email.
function validateEmail(email) {
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

return regex.test(email) 
}

	
let email = "test-email@example..com"  //true
console.log(validateEmail(email))
let email = "john.doe@example.com"
console.log(validateEmail(email))  //true
let email = "jane_smith@example.co.uk"
console.log(validateEmail(email))  //true
let email = "john.doe@example"
console.log(validateEmail(email))  //false
let email = "jane_smith@examplecom"
console.log(validateEmail(email))  //false */


/*Task 3 DONE
Write a regular expression in variable regex that will swap the 2 substrings in the string text.

let regex = /(\w+!*)\s+(\w+)/

let text = "world! Hello"
let swappedText = text.replace(regex, "$2 $1");
console.log(swappedText); //Hello wordld!


let text1 = "Java Script"
let swappedText1 = text1.replace(regex, "$2 $1");
console.log(swappedText1); //Script Java */


/*Task 4 DONE
Write a regular expression in variabl regex that will perform validation of the bank card number in format 9999-9999-9999-9999.
let regex = /^[1-9]{4}-\d{4}-\d{4}-\d{4}/

let cardNumber = "12A4-5678-9012-3456"
let isValid = regex.test(cardNumber);
console.log(isValid);
let cardNumber = "1234-5678-9012"
let isValid = regex.test(cardNumber);
console.log(isValid);
let cardNumber = "1234-5678-9012-3456"
let isValid = regex.test(cardNumber);
console.log(isValid);*/


/*Task 5 DONE
 Write a function checkLogin(login) that checks the correctness of the login. A valid login is a string of 2 to 10 characters, containing only letters, dots and numbers, a number cannot be the first character. The function should take a string and return object {isValid: Bolean, numbers : Array of string} with result of the login verification (isValid) and array of all numbers in input string (numbers), including floating-point numbers.

function checkLogin(login) {
   let regex = /^[a-zA-Z.][a-zA-Z0-9.]{1,9}$/;
   let numbers = login.match(/[0-9]+(\.[0-9]+)?/g)
   
   if(numbers === null ) {
    numbers = [];
}
   return {
    isValid: regex.test(login),
    numbers: numbers
};
}

	
let result = checkLogin("userLogin");
console.log(result.isValid); //true
console.log(result.numbers); //[] */