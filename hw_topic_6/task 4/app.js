// DONE 
//реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

let button = document.querySelector(".btn");
let inputs = document.querySelectorAll(".arr");
let outPlace = document.querySelector(".out");

function result() {
  outPlace.innerHTML =
    inputs[0].value +
    "<br>" +
    inputs[1].value +
    "<br>" +
    inputs[2].value +
    "<br>" +
    inputs[3].value;
}

button.addEventListener("click", result);
