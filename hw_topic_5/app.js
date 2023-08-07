//STUDY
/*let employee = {
    firstName: "Peter",
    lastName: "Peterson",
    position: "developer",
    experience : 4
    }

    //console.log(employee.firstName); 
    //console.log(employee["firstName"]);
    
    employee["salary"] = 500; //employee.salary = 500;
    //console.log(employee.salary)

    //employee["firstName"] = "ira";  //employee.firstName = "ira";
    console.log(employee)

    //let salaryProperty = "salary"; //через змінну
    //console.log(employee[salaryProperty]); // 500
    //console.log(employee.salaryProperty); //underfined

    //employee.extra salary = 600; // error, because empty space
    //employee["extra salary"] = 500; // 500
    //console.log(employee)
*/

//Task 01

/*class Circle {
  constructor(center = { x: 0, y: 0 }, radius) {
    this.center = center;
    this.radius = radius;
  }

  static createCircle(x, y, r) {
    let newCircle = new Circle({ x: x, y: y }, r);
    return newCircle;
  }

  getLength() {
    const L = 2 * Math.PI * this.radius;
    return L;
  }

  static getLengthFromRadius(radius) {
    const length = 2 * Math.PI * radius;
    return length;
  }

  checkPointInside(point = { x: 0, y: 0 }) {
    const lengthFromCenterToPoint =
      (point.x - this.center.x) ** 2 + (point.y - this.center.y) ** 2;
    if (lengthFromCenterToPoint <= this.radius) {
      return true;
    } else return false;
  }

  getCopy() {
    return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
  }

  toString() {
    return `Circle with center in ${this.center.x},${this.center.y} and radius ${this.radius}`;
  }
}

const circle = new Circle({ x: 1, y: 1 }, 2);
const newCircle = circle.getCopy();
console.log(circle.toString());
console.log(newCircle.toString());
console.log(circle === newCircle);

//const circle = Circle.createCircle(10, 15, 34);

//const circle = new Circle({x: 1, y: 1}, 5);
//console.log(circle.getLength().toFixed(1))
//console.log(Circle.getLengthFromRadius(10).toFixed(1))

//const circle = new Circle({x: 2, y: 2}, 20)
//const pointInside = {x: 3, y: 3}
//console.log(circle.checkPointInside(pointInside))

//console.log(circle);
//console.log(circle.toString());  // = console.log(String(circle))*/

//Task 02

/*function propsCount(currentObject = {}) {

    let count = 0;
    for (const key in currentObject) {
            count++;
        }
        return count;
    }

const mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
  };
  console.log(propsCount(mentor)); //3*/

//Task 03

/*class Person {
    constructor( name, surname) {
        this.name = name;
        this.surname = surname;
    }
     getFullName() {
        return `${this.surname} ${this.name}`;
    }
  }

  class Student extends Person {
    constructor(name, surname, year) {
        super (name, surname);
        this.year = year;
    }

    getFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;   
    }

    getCourse() {
        const currentYear = new Date();
        return  currentYear.getFullYear() - this.year + 1;
    }
  }

  const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.getFullName("Petrovych"));
  console.log("Current course: " + stud1.getCourse()); //5*/

//Task 04

/*class Marker {
  #color;
  #amountOfInk;

  constructor(color) {
    this.#color = color;
    this.#amountOfInk = 200;
  }

  get color() {
    return this.#color;
  }

  get ink() {
    return this.#amountOfInk;
  }

  //set ink(value) {
    //    this.#amountOfInk = value;
    //}

  setInk(value) {
    this.#amountOfInk = value;
  }

  print(text) {
    for (const letter of text) {
      if (letter !== " " && this.#amountOfInk >= 20) {
        console.log(letter);
        this.#amountOfInk -= 20;
      } else if (this.#amountOfInk < 20) {
        //console.log("Out of ink!");
        break;
      } else {
        console.log(" ");
      }
    }
  }
}

class RefillableMarker extends Marker {
  //refill() {
    //    this.ink(200);
   // }

  refill() {
    this.setInk(200);
  }
}

// Usage:
const marker = new Marker("red");
console.log("Color:", marker.color);
console.log("Ink Level:", marker.ink);
marker.print("Hello World!");
console.log("Ink Level:", marker.ink);

const refillableMarker = new RefillableMarker("blue");
console.log("Color:", refillableMarker.color);
console.log("Ink Level:", refillableMarker.ink);
refillableMarker.print("Lorem ipsum dolor sit amet");
console.log("Ink Level:", refillableMarker.ink);
refillableMarker.refill();
console.log("Ink Level after refill:", refillableMarker.ink);*/

//Task 05

/*class Worker {
  #fullName = "";
  #dayRate = 0;
  #workingDays = 0;
  #experience = 0;

  constructor(fullName, dayRate, workingDays, experience) {
    this.#fullName = fullName;
    this.#dayRate = dayRate;
    this.#workingDays = workingDays;
    this.#experience = experience;
  }

  getSalary() {
    return this.#dayRate * this.#workingDays;
  }

  getSalaryWithExperience() {
    return this.#dayRate * this.#workingDays * this.#experience;
  }

  get fullName() {
    return this.#fullName;
  }

  get dayRate() {
    return this.#dayRate;
  }
  get experience() {
    return this.#experience;
  }
  get workingDays() {
    return this.#workingDays;
  }

  set fullName(value) {
    if(value === '') {
        console.log('Error')
    } else
    this.#fullName = value;

  }

  set dayRate(value) {
    if(value < 0) {
        console.log('Error')
    } else
    this.#dayRate = value;
  }

  set experience(value) {
    if(value < 0) {
        console.log('Error')
    } else
    this.#experience = value;
  }
  addWorkingDays(number) {
     this.#workingDays += number;
  }

  static sortBySalary([...arrayOfWorkers]) {
    const sortBySalarys = arrayOfWorkers.sort((a, b) => {
        return a.getSalaryWithExperience() - b.getSalaryWithExperience();
    });
    return sortBySalarys;
  }
}

const worker1 = new Worker("David Brown", 450, 20, 1);
const worker2 = new Worker("Adam Oliver", 780, 15, 2);
const worker3 = new Worker("John Johnson", 325, 30, 1);
const arrayOfWorkers = [worker1, worker2, worker3];
//const sortedArrayOfWorkers = Worker.sortBySalary([...arrayOfWorkers]);

const sortedArrayOfWorkers = Worker.sortBySalary(arrayOfWorkers);
console.log("Before Sorting")
arrayOfWorkers.forEach((worker)=>console.log(worker.fullName));
console.log("\n After Sorting")
sortedArrayOfWorkers.forEach((worker)=>console.log(worker.fullName));*/

/*const worker = new Worker("John Johnson", 20, 23, 1);
console.log(worker.fullName);
console.log(worker.getSalary());
console.log(worker.getSalaryWithExperience())*/

/*const worker = new Worker("Adam Oliver", 100, 1, 2);
worker.dayRate = 200;
worker.experience = 3;
worker.addWorkingDays(29);
console.log(worker.getSalary());
console.log(worker.getSalaryWithExperience());*/

/*const worker1 = new Worker("David Brown", 450, 20, 1);
const worker2 = new Worker("Adam Oliver", 780, 15, 2);
const worker3 = new Worker("John Johnson", 325, 30, 1);
const arrayOfWorkers = [worker1, worker2, worker3];
const sortedArrayOfWorkers = Worker.sortBySalary(arrayOfWorkers);
console.log("Before Sorting")
arrayOfWorkers.forEach((worker)=>console.log(worker.fullName));
console.log("After Sorting")
sortedArrayOfWorkers.forEach((worker)=>console.log(worker.fullName));*/
