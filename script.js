//your code here
const displayAns = document.querySelector("#input");

const clearButton = document.querySelector("#clr");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const back = document.querySelector("#clear");
const num7 = document.querySelector("#block7");
const num8 = document.querySelector("#block8");
const num9 = document.querySelector("#block9");
const minus = document.querySelector("#minus");

const num4 = document.querySelector("#block4");
const num5 = document.querySelector("#block5");
const num6 = document.querySelector("#block6");
const plus = document.querySelector("#plus");

const num1 = document.querySelector("#block1");
const num2 = document.querySelector("#block2");
const num3 = document.querySelector("#block3");
const dot = document.querySelector("#dot");

const num0 = document.querySelector("#block0");
const equalTo = document.querySelector("#ans");

const bracketStart = document.querySelector("#start");
const bracketEnd = document.querySelector("#end");


let str="";
function dis(){
  displayAns.value=str;
}
function cler(){
  str="";
 dis()
}
clearButton.addEventListener("click" ,cler);

function f7(){
  str+=num7.textContent;
  dis()
}
num7.addEventListener("click" ,f7);

function f8(){
  str+=num8.textContent;
  dis()
}
num8.addEventListener("click" ,f8);

function f9(){
  str+=num9.textContent;
 dis()
}
num9.addEventListener("click" ,f9);

function f6(){
  str+=num6.textContent;
 dis()
}
num6.addEventListener("click" ,f6);

function f5(){
  str+=num5.textContent;
 dis()
}
num5.addEventListener("click" ,f5);

function f4(){
  str+=num4.textContent;
 dis()
}
num4.addEventListener("click" ,f4)

function f3(){
  str+=num3.textContent;
 dis()
}
num3.addEventListener("click" ,f3);

function f2(){
  str+=num2.textContent;
 dis()
}
num2.addEventListener("click" ,f2);

function f1(){
  str+=num1.textContent;
 dis()
}
num1.addEventListener("click" ,f1);

function f0(){
  str+=num0.textContent;
 dis()
}
num0.addEventListener("click" ,f0);

function add(){
  str+=plus.textContent;
 dis()
}
plus.addEventListener("click" ,add);

function sub(){
  str+=minus.textContent;
 dis()
}
minus.addEventListener("click" ,sub);

function mul(){
  str+=multiply.textContent;
 dis()
}
multiply.addEventListener("click" ,mul);

function divv(){
  str+=divide.textContent;
 dis()
}
divide.addEventListener("click" ,divv);

function dott(){
  str+=dot.textContent;
 dis()
}
dot.addEventListener("click" ,dott);

function deletee(){
  str = str.slice(0,-1);
 dis()
}
back.addEventListener("click" ,deletee);

function bracStarting(){
  str+=bracketStart.textContent;
 dis()
}
bracketStart.addEventListener("click" ,bracStarting);

function bracEnding(){
  str+=bracketEnd.textContent;
 dis()
}
bracketEnd.addEventListener("click" ,bracEnding);


function result(){
  let str1=eval(str);
  str=str1;
 dis()
}
ans.addEventListener("click" ,result);