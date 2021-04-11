// 1 //
function propsCount(currentObject) {
  let count = null

  for (let key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
          count++
      }
  }
  return count
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};

console.log(propsCount(mentor))
// 2 //
let student = {
  name: "Maks",
  lastName: "Savytskyi",
  age: 18,
  University: "NULP",
  form: 1

}

function showProps(obj) {
  let arrProp = []
  let arrValue = []

  let objPropAndValue = {

  }

  for (let key in obj) {
      arrValue.push(obj[key])
      arrProp.push(key)
  }
  objPropAndValue.key = arrProp;
  objPropAndValue.value = arrValue

  return objPropAndValue
}
console.log(showProps(student))

checkIfEven();
// 3 // 
class Person {
  constructor(name, surname) {
      this.name = name;
      this.surname = surname
  }
  showFullName() {
      return this.surname + " " + this.name
  }
}

class Student extends Person {
  constructor(name, surname, year) {
      super(name, surname)

      this.year = year
  }

  showFullName(midleName) {
      return super.showFullName() + " " + midleName

  }

  showCourse() {
      let currentYear = new Date().getFullYear();

      let currentCourse = null

      currentCourse = currentYear - this.year
      return currentCourse
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1)
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
// 4 //
class Worker {
  #experience = 1.2


  constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays
  }

  showSalary() {
      let salary = null;

      salary = this.dayRate * this.workingDays
      return salary
  }



  showSalaryWithExperience() {

      let salaryWithExperience = null;

      salaryWithExperience = this.dayRate * this.workingDays * this.#experience

      return salaryWithExperience
  }
  get experience() {
      return this.#experience
  }
  set experience(value) {
      this.#experience = value
      return this.#experience
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("New experience: " + worker2.experience);
console.log(worker2.showSalaryWithExperience());
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.showSalaryWithExperience());


let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("New experience: " + worker3.experience);
console.log(worker1.showSalaryWithExperience());
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(worker3.showSalaryWithExperience());

let workers = [
  worker1,
  worker2,
  worker3
]

workers.sort((w1,w2) => {
 if (w1.showSalaryWithExperience() > w2.showSalaryWithExperience()){
     return 1
 }else{
     return -1
 }
})

console.log('Sorted by salary:')

for(let i = 0; i < workers.length; i++){
console.log(workers[i].fullName + ': ' + workers[i].showSalaryWithExperience())
}
// 5 //   
class GeometricFigure {
  getArea() {
    return 0;
}
toString() {
    return Object.getPrototypeOf(this).constructor.name;
}
}

class Triangle extends GeometricFigure {

constructor(side, hight) {
    super()
    this.side = side
    this.hight = hight
}

getArea() {
    return 0.5 * this.side * this.hight
}
}

class Square extends GeometricFigure {
constructor(side) {
    super()
    this.side = side
}
getArea() {
    return this.side * this.side
}

}


class Circle extends GeometricFigure {
constructor(radius) {
    super()
    this.radius = radius
}

getArea() {
    return Math.PI * Math.pow(this.radius, 2)
}
}

function handleFigures(figures) {
let totalAreaOfFigures = null

for (let i = 0; i < figures.length; i++) {
    if (figures[i] instanceof GeometricFigure) {

        let area = figures[i].getArea()
        console.log('Geometric figure: ' + figures[i].toString() + ' - area: ' + area)
        totalAreaOfFigures += area
    }
}

return totalAreaOfFigures
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
