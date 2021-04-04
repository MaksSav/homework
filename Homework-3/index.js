// 1 //
const res = 1;
const arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  res = res * arr[i];
}
console.log(res);

const result = 1;
const s = 0;
while (s < arr.length) {
  result = result * arr[s];
  s++;
}
console.log(result);
// 2 //
function checkIfEven() {
  for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

checkIfEven();
// 3 // 
const min = 1;
const max = 500;
const array = [];

function randArray(random) {
  for (let i = 0; i < random; i++) {
    array[i] = (function (x, y) {
      return Math.floor(Math.random() * x) + y;
    }(max, min))
  }
}

const size = prompt("Enter the array size");

randArray(size);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 4 //
function raiseToDegree(a, b) {
  return a ** b
}
let res = raiseToDegree(3, 4)
console.log(res);
// 5 //
function findMin() {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i])
      min = arguments[i]; {
    }
  }
  return min;
}
console.log(findMin(12, 14, 4, -4, 0.2));
// 6 //
function testUnique(arg) {
  var n = arg.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) { if (arg[i] === arg[j]) return false; }
  }
  return true;
}
let arg = [1, 2, 3, 5, 3];

console.log(testUnique(arg));
// 7 // 
function lastElem(array, sum) {

  let arr = [];

  if (sum == undefined) {
    sum = 1;
  }
  if (sum > array.length) {
    sum = array.length;
  }
  for (let i = 0; i < sum; i++) {
    arr[i] = array[array.length - sum + i];
  }
  return arr;
}

const arr = [1, 2, 3, 5, 3];
console.log(lastElem(arr, 3));
// 8 //
function largecase(str) {
  var array = str.split(' ');
  var array2 = [];

  for (var i = 0; i < array.length; i++) {
    array2.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return array2.join(' ');
}
console.log(largecase('i love java script'));


