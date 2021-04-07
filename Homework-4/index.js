// 1 //
function calcRectangleArea(width, height) {
  if (typeof width != "number" || typeof height != "number") {
    throw new Error("Type is not number");
  }
  return width * height;
}

try {
  console.log(calcRectangleArea(10, 5));
  console.log(calcRectangleArea(10, ));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
// 2 //
function checkAge() {
  const age = prompt("Enter your age");
  if (age == "" || isNaN(age) == true || age < 14) {
    throw new Error("Your age is not correct Please enter your age");
  }
  document.write("Film:");
}

try {
  checkAge();
} catch (error) {
  alert(error.name + "! " + error.message);
}

checkIfEven();
// 3 // 
class MonthException {
  monthArray = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  name;
  message;
  constructor(name, message) {
    this.name = name;
    this.message = message;
  }
}

function showMonthName(month) {

  const mException = new MonthException("Incorrect month number");

  if (month < 1 || month > 12) {
    throw mException;
  } else {
    return mException.monthArray[month - 1];
  }
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (exception) {
  console.log(exception.name + " " + exception.message);
}
// 4 //
const user1 = {
  id: 7
};
const user2 = {
  id: -12
};
const user3 = {
  id: 44
};
const user4 = {
  id: 22
};
const arr = [user1, user2, user3, user4];
function showUser(id) {

  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return arr[i];
    }
  }
}

function showUsers() {
  try {
    for (let i = 0; i < arguments.length; i++) {
      showUser(arguments[i]);
    }
  } catch (error) {
    console.log(error.message);
  }
  let idArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id >= 0) {
      idArr[i] = arr[i];
    }
  }
  console.log(idArr);
}

showUsers(7, -12, 44, 22);

