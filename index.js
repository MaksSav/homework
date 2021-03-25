// 2 //
const surname = "Savytsyi";
console.log (surname);
// 3 //
const number = 2;
const numberTwo = 5;
document.write (number ,numberTwo);
number = numberTwo ;
document.write (number);
// 4 //
const object = {
    name = "Maks" ,
    income =  18  ,
    isNumber = true ,
    undef ,
    isNull = null ,
}
// 5 //
const isAdult = confirm("Ви Повнотній?");
console.log( isAdult );
// 6 //
const firstName = "Maks";
console.log( typeof firstName);
const surname = "Savytsyi"
console.log(typeof surname );
const group = "583 JS Core";
console.log(typeof group );
const yearOfBirth = 2002;
console.log(typeof yearOfBirth );
const isAdult = true;
console.log(typeof isAdult );
console.log(yearOfBirth, isAdult, firstName );
const havBrothers = null ;
const game;
console.log (game, havBrothers );

// 7 //
const login = prompt('Введіть логін' );
const email = prompt('Введіть емейл' );
const password = prompt('Введіть пароль');
alert(`Вітаю:` + login `ваш емейл ` +email  `ваш пароль `+password);
// 8 //
const secondsOfHour = 60*60 ;
const secondsOfDay = 60*60*24 ;
const secondsOfMonth = 60*60*24*12;
alert(`Секунд в годині:` + secondsOfHour  `Секунд в дні ` +secondsOfDay  `Секунд в місяці `+secondsOfMonth) ;