// 1 // 
let newWindow = window.open("", "", "width=300,height=300");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  newWindow.close();
}, 6000);

// 2 //
function changeStyle() {
  let text = document.getElementById("text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
}

// 3 //
// first //
function changeBgColor() {
  document.body.style.backgroundColor = "blue";
}
document.getElementById("btn").onclick = changeBgColor;
// second //
function changeBgColorDbl() {
  document.body.style.backgroundColor = "pink";
}
document.getElementById("btn_2").ondblclick = changeBgColorDbl;

//third //
function pressThirdBtn() {
  document.body.style.backgroundColor = "Brown";
}
document.getElementById("btn_3").addEventListener("mousedown", pressThirdBtn);

function unpressThurdBtn() {
  document.body.style.backgroundColor = "white";
}
document.getElementById("btn_3").addEventListener("mouseup", unpressThurdBtn);

// link //
function linkMouseOver() {
  document.body.style.backgroundColor = "yellow";
}
document.querySelector("a").addEventListener("mouseover", linkMouseOver);

function linkMouseOut() {
  document.body.style.backgroundColor = "white";
}
document.querySelector("a").addEventListener("mouseout", linkMouseOut);

// 4 //
function deleteItem() {
  let elem = document.getElementById("names");
  elem.remove(elem.selectedIndex);
}

// 5 //
function onClickBtn() {
  let btn = document.createTextNode("I was pressed ");
  document.body.appendChild(btn);
}
function mouseOverBtn() {
  let btn = document.createTextNode("Mouse on me! ");
  document.body.appendChild(btn);
}
function mouseOutBtn() {
  let btn = document.createTextNode("Mouse in not on me! ");
  document.body.appendChild(btn);
}

// 6 //
function showWindowSize() {
document.getElementById("width").innerHTML = "Width: " + window.innerWidth;
document.getElementById("height").innerHTML = "Height: " + window.innerHeight;
}

showWindowSize();
window.addEventListener("resize", showWindowSize);