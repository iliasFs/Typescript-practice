"use strict";
let stringArr = ["one", "hey", "ilias"];
let quitars = ["strat", "les Paul", 5150]; //union
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("ilias");
quitars[0] = 1984;
quitars.unshift("Jim");
quitars = stringArr;
let test = [];
let bands = [];
bands.push("lsfsd");
//Tuple - length and types specific
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
//mixed = myTuple -->its ok
//myTuple = mixed //its not accepted because the source array (mixed) does not require specifically 3 elements only.Because later in the programm we may change the value of mixed so we will have a provblem.
//myTuple[3] = 42 no!
//OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj); // object be ause arrays = objects in js
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop2 = false; //cannot accept other types only boolean.
let evh = {
    name: "ilias",
    active: true,
    albums: [1984, 5150, "kenfsk"],
};
let jp = {
    name: "George",
    active: true,
    albums: ["ser", "seser", "kenfsk"],
};
evh = jp;
//evh.years = 40 //cannot
//how to make a property optional -- we put ?at the properties before column
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello";
};
console.log(greetGuitarist(jp));
//Enums
// "Unlike" most Typescript features, Enums are not a type-level addition to javascript btu something addes to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D); // 1 by default
