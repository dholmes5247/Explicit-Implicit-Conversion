/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let str = "5"; // str is a string
let num = Number(str);// convert str to a number
let result = num - 2; // subtract 2 from number
console.log("The result is: " + result); // output the result as number

let isValid = Boolean("false"); // convert the string "false" to a boolean
if (isValid) {
  console.log("This is valid!");  // This is truthy since the string had letters making it true
}

let str = "5"; //str is a string
let num = Number(str); // convert str to a number
let age = 25; // assign age as number
let totalAge = age + num; // add age and num
console.log("Total Age: " + totalAge); // output the total age as number


/*  These are examples that we were supposed to write showing an implicit and explicit type conversion
    Implicit Type Conversion: This is when the type conversion is done automatically by JavaScript without the user's input
    Explicit Type Conversion: This is when the user explicitly converts the type of a variable
*/
let currentApples = null; // value is null
let totalApples = currentApples + 5; // Implicit type conversion of null to 0
console.log("Number of Apples: " + totalApples); //output total #5 of apples on hand

let str = "3.623 meters"; // str is a string
console.log(parseFloat(str)); // Explicit type conversion of string to a float number, 3.623
console.log(typeof parseFloat(str)); // output the type of the converted value - number

let str = "3.623 meters"; // str is a string
console.log(parseInt(str)); // Explicit type conversion of string to an integer number, 3
console.log(typeof parseInt(str)); // output the type of the converted value - number

let str = ""; // str is an empty string
let BooleanStr = Boolean(str); // Explicit type conversion of an empty string to a boolean
console.log(BooleanStr); // output false since the string is empty
console.log(typeof BooleanStr); // output the type of the converted value - boolean