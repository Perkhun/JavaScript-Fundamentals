/* DONE
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/

let circles = document.querySelectorAll(".circle");

for (const iterator of circles) {
  let attribute = iterator.getAttribute("data-anim");
  console.log(attribute);

  iterator.classList.add(attribute);
}

//перевірити чи застосувались анімації
let circle = document.querySelector(".circle");
circle.addEventListener("animationstart", (ev) => {
  console.log("START", ev);
});
