var a = "Hello World!";
/* type of typeScript----------------------

Array, number, boolean, string, null, undefined, unknown, never, any

*/
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toLowerCase("Hello"));
console.log(toLowerCase("Hello World!"));
console.log(toLowerCase("15"));
var num = 15;
function add(num1, num2) {
    return num1 + num2;
}
add(65, 10);
// arrow function
var subscript = function (num1, num2) { return num1 - num2; };
subscript(5, 3);
// Array declare in typescript
var arr = [4, 5, 6, 87, 4, 2];
var arr1 = ["4", "5", "6", "87"];
// default parameter
function parameter(num1, num2) {
    if (num1 === void 0) { num1 = 25; }
    return num1 + num2;
}
var id = "25";
var person = {
    name: "Al Amin",
    Profession: "Web Developer",
    roll: "Admin",
    id: 1,
    married: true
};
var person2 = {
    name: "Moriom",
    Profession: "Housewife",
    roll: "Sub-Admin",
    married: true
};
// Enum
var Colors;
(function (Colors) {
    Colors["color1"] = "#fff000";
    Colors["color2"] = "#ff0000";
    Colors["color3"] = "#ffdddd";
})(Colors || (Colors = {}));
console.log(Colors.color2);
// Generic
/* function generic<T>(a: T, b: T): T {
  return a + b;
}

generic<number>(1, 5);
generic<string>("Al", "Amin"); */
// Array<>
var arr2 = [1, 5, 56, "Al Amin"];
console.log(arr2);
