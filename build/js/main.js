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
function sayHello(name, yell = false) {
    if (yell)
        name = name.toUpperCase();
    console.log(`Hello ${name}`);
}
sayHello("ilias");
sayHello("yarnex", true);
const ilias = {
    name: "ilias",
    age: 39,
    job: "Software engineer",
    dominantHand: "right",
};
console.log(ilias);
function stringMap(array, iteratee) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(iteratee(element, index, array));
    }
    return result;
}
console.log(stringMap(["a", "b", "c"], (str) => {
    return str.toUpperCase();
}));
c;
const person = {
    name: "ilias",
    job: "Software Engineer",
};
