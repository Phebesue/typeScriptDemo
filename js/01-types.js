//1         //2         //3
var username = "instructor";
var password2 = "Letmein1234!";
var instructorId = 5;
var password1;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
// errored code
var password;
// password = 1234;
// Basic Types
// Number
var age = 40;
var currentYear = 2018;
// Octal Literals
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
// String
var companyName;
companyName = "Eleven Fifty";
// Single or double quotes are ok
var appName = 'Twitter';
appName = "Instagram";
// Boolean
var isLoggedIn = true;
var isGoldLevelUser = true;
// Array
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
// indices works in the same way
console.log("Student List:", studentList[0]);
// Any
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// Void
function sayHelloToAll() {
    console.log("Hello to all!");
}
// Null & Undefined
var undefinedVariable = undefined;
var nullVariable = null;
// Tuple
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "kennisreally40"]; // OK
// Errored code
// usernameAndId = ["kenn26", 2];
// Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
// Union Types
var x;
var y;
// examples
x = '1234';
x = 1234;
// Errored Code - because boolean wasn't listed as an option
// x = true;
// y = false;
// Annotations
function demoFunction(someNum) {
    return someNum;
}
// We can call the function with a number as the argument.
// We can call the function with a string as an argument.
// We can add arguments that weren't originally declared.
demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); //3
// JavaScript was created to be a client side language
// TypeScript compiles into JS, while also implementing tradional ttypes like we see in C3 or Java/
/*
Features of TypeScript
  -TypeScript code is converted to plain javaScript code
  -JavaScript is TypeScript
   -TypeScript supports ALL JS libraries

 Differences between Ts and JS
   -TypeScript is known as an Object-Oriented programming language, whereas JS is just a scripting Language
   -TypeScript has a feature known as "static typing" but JS does not
   -TypeScript gives support for modules whereas JS does not support modules
   -TypeScript has interface but JS does not
   
Advantages of TS
  -TypeScript always points out any compilation errors at the time of development. This means les errors at run-time
  -ith compile time error checking, our program wont execute a single line of code until we remove al syntax errors
  -Static typing allows for checking type correctness at compile time, which is not available in JS
*/
// JS declaration
var b = 7;
// Will fail because b has already been declared as a number
// b = "seven";
// TypeScript Declaration
var username5 = "instructor";
var password5 = "letmein";
var instructorId5 = 5;
var phone;
var isMarried5;
// Numbers
var age5 = 26;
// Strings
var companyName5;
companyName5 = "String";
// Booleans
var isLoggedIn5 = false;
var isLoggedOut5 = true;
// Array
// if you state "string[]" you have an array of strings
var studentList5 = ["name", "age", "height"];
var allScores5 = [12, 44, 55, 21];
// Any
/*
We can toggle off forced types by using the "any" data type. It is commonly used for API calls, but practice is to use unknown. The Any data type is essentially turning typeScript off.
*/
var dataFromThirdParty5 = "12345";
dataFromThirdParty5 = 12345;
// Void
/*
A Void data type has no data type at all - it's basically the complete opposite of Any. You may commonly see this as a return type of function that do not return a value
*/
function sayHelloToAll5() {
    console.log("Hello to all!");
    // return "string";    
}
// Null & Undefined
var undefinedVariable5 = undefined;
var nullVariable5 = null;
// Tuple
/*
Tuple types allow you to create an array with multiple different types. You will still have a fixed number of items in the array, but the items need to be different types. This is great for key value pairs.
*/
var userNameAndId5;
userNameAndId5 = ["string", "string", 5, true];
// Enum
var WeaponType5;
(function (WeaponType5) {
    WeaponType5[WeaponType5["Sword"] = 0] = "Sword";
    WeaponType5[WeaponType5["Saber"] = 1] = "Saber";
    WeaponType5[WeaponType5["Spear"] = 2] = "Spear";
})(WeaponType5 || (WeaponType5 = {}));
;
var weapon5 = WeaponType5.Sword;
var CardType5;
(function (CardType5) {
    CardType5[CardType5["Ace5"] = 1] = "Ace5";
    CardType5[CardType5["Two5"] = 2] = "Two5";
    CardType5[CardType5["Three5"] = 3] = "Three5";
    CardType5[CardType5["Four5"] = 4] = "Four5";
})(CardType5 || (CardType5 = {}));
;
var cardType5 = CardType[2];
console.log(cardType);
// Union Types
/*
Union Types allow us to have more flexibility with our variables, but we still intend on declaring what type(s) the variable should expect
*/
var w;
w = 5;
w = "five";
//# sourceMappingURL=01-types.js.map