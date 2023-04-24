// let stringArr = ["one", "hey", "ilias"];

// let quitars = ["strat", "les Paul", 5150]; //union

// let mixedData = ["EVH", 1984, true];

// stringArr[0] = "John";
// stringArr.push("ilias");

// quitars[0] = 1984;
// quitars.unshift("Jim");

// quitars = stringArr;

// let test = [];
// let bands: string[] = [];

// bands.push("lsfsd");

// //Tuple - length and types specific

// let myTuple: [string, number, boolean] = ["Dave", 42, true];

// let mixed = ["John", 1, false];

// //mixed = myTuple -->its ok

// //myTuple = mixed //its not accepted because the source array (mixed) does not require specifically 3 elements only.Because later in the programm we may change the value of mixed so we will have a provblem.

// //myTuple[3] = 42 no!

// //OBJECTS
// let myObj: object;
// myObj = [];

// console.log(typeof myObj); // object be ause arrays = objects in js

// myObj = bands;
// myObj = {};

// const exampleObj = {
//   prop1: "Dave",
//   prop2: true,
// };

// exampleObj.prop2 = false; //cannot accept other types only boolean.

// // type Guitarist = {
// //   name: string;
// //   active?: boolean;
// //   albums: (string | number)[];
// // };

// //interface is more like a class

// interface Guitarist {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// }

// let evh: Guitarist = {
//   name: "ilias",
//   active: true,
//   albums: [1984, 5150, "kenfsk"],
// };
// let jp: Guitarist = {
//   name: "George",
//   active: true,
//   albums: ["ser", "seser", "kenfsk"],
// };

// evh = jp;

// //evh.years = 40 //cannot

// //how to make a property optional -- we put ?at the properties before column

// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name.toUpperCase()}`;
//   }
//   return "Hello";
// };

// console.log(greetGuitarist(jp));

// //Enums
// // "Unlike" most Typescript features, Enums are not a type-level addition to javascript btu something addes to the language and runtime.

// enum Grade {

//     U,
//     D,
//     C,
//     B,
//     A
// }

// console.log(Grade.D) // 1 by default

//type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber   // will not work.think interfaces like classes

// Literal Types

let myName: "ilias";
// myName = 'John' cannot do that.

let userName: "Dave" | "John" | "Amy";

userName = "John";

// functions

const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any): void => {
  //Void because it doesnt return anyhting

  console.log(message);
};

logMsg(add(3, 4));

console.log("hello there");

function sayHello(name: string, yell: boolean = false) {
  if (yell) name = name.toUpperCase();
  console.log(`Hello ${name}`);
}

sayHello("ilias");
sayHello("yarnex", true);

type DominandHand = "right" | "left" | "both";

interface IPerson {
  name: string;
  age: number;
  job: string;
  dominantHand: DominandHand;
}

const ilias: IPerson = {
  name: "ilias",
  age: 39,
  job: "Software engineer",
  dominantHand: "right",
};

console.log(ilias);
