// 1 //
function upperCase(str) {
  let regExp = /^[A-Z]/;
  if (regExp.test(str)) {
    alert("String's starts with uppercase character");
  } else {
    alert("String's not starts with uppercase character");
  }
}

upperCase("say");
upperCase("Say");
// 2 //
function checkEmail(str) {
  regExp1 = /@/;
  regExp2 = /gmail/;
  regExp3 = /.com/;
  alert(regExp1.test(str) && regExp2.test(str) && regExp3.test(str));
}

checkEmail("Qmail2@gmail.com");
checkEmail("Qmail2@gmailcom");
// 3 //
// 4 //
let str = "Java Script";

let regExp1 = /[^\s]+/g;

let arr = str.match(regExp1);

str = (arr[1] + "," + arr[0]);

console.log(str);
// 5 //
function checkIfValid(num){
  let regExp = /\d{4}(\s|\-)\d{4}(\s|\-)\d{4}(\s|\-)\d{4}/;
  let res = regExp.test(num);
  if (res) {
      console.log("Card is valid:)");
  } else {
      console.log("Cars is invalid");
  }
}
// 6 //
function checkValidEmail(str) {
  const reg = /^[A-Za-z0-9]+\w+([-\.]?\w+)/;
  return reg.test(str) ? 'Email is correct!' : 'Email is not correct!';
}
console.log(checkValidEmail('my_mail@gmail.com'));
console.log(checkValidEmail('#my_mail@gmail.com'));
// 7 //
function checkLogin(str) {
  console.log(/^\D(\w\.?){2,10}$/.test(str));
  let re = /(\d\.?)+/g;
  let result2 = str.match(re);
  console.log(result2);
}