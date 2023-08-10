// DONE 
//Реалізувати логіку підрахунку ціни товару по його варіаціях
//(шаблон наведений тут, при кліку на колір змінювати  price).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

let buttonColors = document.querySelectorAll(
  ".container .card .info .color-container .colors .color"
);



//#1 CHANGE_PRICE+PHOTO

function clickColorChangePrice(event) {
  /* buttonColors.forEach(function(buttonColor) {
            buttonColor.classList.remove('active')
        })
            event.target.classList.add('active')*/


  let dataPrice = event.target.getAttribute("data-price");

  clickColorChangeImage(event);

  let outPrice = document.body.querySelector(
    ".container .card .info .size-container h1"
  );
  outPrice.innerHTML = dataPrice;
}

buttonColors.forEach(function (buttonColor) {
  buttonColor.addEventListener("click", clickColorChangePrice);
});




//#2 CHANGE_PRICE_SGRADIENT+PHOTO

function clickColorChangePriceByGradient(event) {
   /*buttonColors.forEach(function(buttonColor) {
            buttonColor.classList.remove('active')
        })
        
            event.target.classList.add('active')*/


  let color = event.target.getAttribute("color");

  clickColorChangeImage(event);

  let gradients = document.querySelectorAll(
    ".container .card .shoeBackground .gradients .gradient"
  );

  gradients.forEach(function (showColor) {
    showColor.classList.remove("second");
    if (showColor.getAttribute("color") === color) {
      showColor.classList.add("second");
      let outPrice = document.body.querySelector(
        ".container .card .info .size-container h1"
      );
      let dataPrice = showColor.getAttribute("data-price");
      outPrice.innerHTML = dataPrice;
    }
  });
}

buttonColors.forEach(function (buttonColor) {
  buttonColor.addEventListener("click", clickColorChangePriceByGradient);
});




//#3 CHANGE_PHOTO
function clickColorChangeImage(event) {
  buttonColors.forEach(function (buttonColor) {
    buttonColor.classList.remove("active");
  });

  event.target.classList.add("active");

  let color = event.target.getAttribute("color");

  let images = document.querySelectorAll(
    ".container .card .shoeBackground .shoe"
  );

  images.forEach(function (showColor) {
    showColor.classList.remove("show");
    if (showColor.getAttribute("color") === color) {
      showColor.classList.add("show");
    }
  });
}

buttonColors.forEach(function (buttonColor) {
  buttonColor.addEventListener("click", clickColorChangeImage);
});
