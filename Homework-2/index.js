// 1 //
res1 = String(x) + y;
console.log(res1);
console.log(typeof res1);

res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

res4 = NaN + x + y;
console.log(res4);
console.log(typeof res4);
// 2 //
const number = Number(prompt('enter number')); 
if (number >= 0){
    if ((userAge % 2) === 0 ){
    alert ('number positive')
    }else {
    alert('number odd')
    }
}else {
    alert ('not even number')
}

const multiple = Number(prompt('enter number')); 
if ((multiple % 7) === 0 ){
    alert ('multiple')
}else {
    alert ('not even number')
}
//3 // 
let arr = [];
arr[0] = 11;
arr[1] = "Hello";
arr[2] = true;
arr[3] = null;

const someVariable = prompt("Enter the fourth element of the array");
arr.push(someVariable);
alert("The fifth element of the array is: " + arr[4]);
arr.shift();
alert(arr);
// 4 //
let cities = ["Rome", "Lviv", "Warshaw"];
const res = [cities[0] + "*" + sities[1] + "*" + sities[2]];
console.log(res);
// 5 //
const userAge = Number(prompt('enter your age')); 
if (isAdult >= 18) {
    alert('you are adult');
} else if (isAdult <= 10) {
    alert('you are still young');
}
// 6 //
const sideA = Number(prompt("Enter side 1"));
const sideB = Number(prompt("Enter side 2"));
const sideC = Number(prompt("Enter side 3"));
if (sideA < 0 || sideB < 0 || sideC < 0) {
    alert("Incorrect data");
} else {
    const halfPerimeter = (sideA + sideB + sideC) / 2;
    let square = Math.sqrt(halfPerimeter *(halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    console.log("The square is:" + square.toFixed(3));
}
// 7 // 
const time = new Date ();
const currectDate = time.getHours();
if (currectDate>= 5 && currectDate <= 11){
    alert('Good morning');
}else if (currectDate >11 && currectDate <= 17){
    alert('Good afternoon');
}else if (currectDate > 17 && currectDate <= 23){
    alert('Good evening');
}else {
    alert('Good night')
}
// 7/2 //
const currectTime = new Date ();
const time = currectTime.getHours();
switch(true){
    case time >= 23 && time <= 5:
    alert('Good night')
    break ;
    case time >= 5 && time < 11:
    alert('Good morning')
    break ;
    case time >= 11 && time < 17:
    alert('Good afternoon')
    break ;
    case time >= 17 && time <= 23:
    alert('Good evening')
    break ;
}

