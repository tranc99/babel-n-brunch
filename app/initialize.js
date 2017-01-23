document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
});

console.log("Whats goin on here?");
var log;
if(5 > 14) {
  log = "./logger"
}
else {
  log = "./logger2"
}
require(log);
require('./module4');
let answer = add(100, 20000);
alert(`answer is ${answer}`);
console.log("my name is ", name);

const mod4 = require("module4");
console.log("Mod4 information: I am ", mod4.name, " and I like ", mod4.dessert, " and I can add 5 and 5 to get ", mod4.adder(5, 5));

import Calculator from "./calculator";
window.NUMBERS = Calculator.add(12, 20);
import {square} from "calculator";
alert("squaring 5 gives " + square(5));
// import {subtract} from "module4";
console.log("subtracting 10 from 50 gives ", mod4.subtract(50, 10));
