let myName: string = "Dave";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "ilias";
meaningOfLife = 42;
isLoading = false;
album = "van hallen";
album = 42;

const sum = (a: number, b: string) => {
  return a + b;
};

console.log(sum(5, "6"));

let postId: string | number; // union type
let isActive: number | boolean;

let re: RegExp = /\w+/g;
