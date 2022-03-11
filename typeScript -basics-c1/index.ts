const a = "Hello World!";

/* type of typeScript---------------------- 

Array, number, boolean, string, null, undefined, unknown, never, any

*/

function toLowerCase(str: string): string {
  return str.toLowerCase();
}

console.log(toLowerCase("Hello"));
console.log(toLowerCase("Hello World!"));
console.log(toLowerCase("15"));

const num: number = 15;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(65, 10);

// arrow function
const subscript = (num1: number, num2: number): number => num1 - num2;

subscript(5, 3);

// Array declare in typescript

const arr: number[] = [4, 5, 6, 87, 4, 2];
const arr1: string[] = ["4", "5", "6", "87"];

// default parameter
function parameter(num1: number = 25, num2: number): number {
  return num1 + num2;
}

// Multiple type
type myNumber = number | string | boolean;

const id: myNumber = "25";

// interface

interface IPerson {
  name: string;
  Profession: string;
  roll: string;
  id?: number;
  married: boolean;
}

const person: IPerson = {
  name: "Al Amin",
  Profession: "Web Developer",
  roll: "Admin",
  id: 1,
  married: true,
};

const person2: IPerson = {
  name: "Moriom",
  Profession: "Housewife",
  roll: "Sub-Admin",
  married: true,
};

// Enum

enum Colors {
  color1 = "#fff000",
  color2 = "#ff0000",
  color3 = "#ffdddd",
}

console.log(Colors.color2);

// Generic

/* function generic<T>(a: T, b: T): T {
  return a + b;
}

generic<number>(1, 5);
generic<string>("Al", "Amin"); */

// Array<>

const arr2: Array<number | string> = [1, 5, 56, "Al Amin"];

console.log(arr2);
