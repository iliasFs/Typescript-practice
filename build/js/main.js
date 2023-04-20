"use strict";
// let stringArr = ["one", "hey", "ilias"];
// interface PostId = stringOrNumber   // will not work.think interfaces like classes
// Literal Types
let myName;
// myName = 'John' cannot do that.
let userName;
userName = "John";
// functions
const add = (a, b) => {
  return a + b;
};
const logMsg = (message) => {
  //Void because it doesnt return anyhting
  console.log(message);
};
logMsg(add(3, 4));
console.log("hello there");
