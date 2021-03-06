 //1         //2         //3
 let username: string = "instructor";
 let password2: string = "Letmein1234!";
 let instructorId: number = 5;

let password1: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";
// errored code
let password: string;
// password = 1234;

// Basic Types
// Number
let age: number = 40;
let currentYear: number = 2018

// Octal Literals
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;


// String
let companyName: string;
companyName = "Eleven Fifty"
// Single or double quotes are ok
let appName: string = 'Twitter';
appName = "Instagram";

// Boolean
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

// Array
//1
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96];
// indices works in the same way
console.log("Student List:", studentList[0]);

// Any
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

// Void
function sayHelloToAll() : void {
    console.log("Hello to all!")
}

// Null & Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

// Tuple
// Declare a tuple type
let usernameAndId: [number, string];
// Initialize it
usernameAndId = [1, "kennisreally40"]; // OK

// Errored code
// usernameAndId = ["kenn26", 2];

// Enum
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword
enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType);

// Union Types
let x: number | string;
let y: number | null;

// examples
x = '1234';
x = 1234;

// Errored Code - because boolean wasn't listed as an option
// x = true;
// y = false;

// Annotations
function demoFunction(someNum){
    return someNum;
}


// We can call the function with a number as the argument.
// We can call the function with a string as an argument.
// We can add arguments that weren't originally declared.
demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); //3


// JavaScript was created to be a client side language
// TypeScript compiles into JS, while also implementing traditional types like we see in C3 or Java/

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
let b = 7;
// Will fail because b has already been declared as a number
// b = "seven";

// TypeScript Declaration
let username5: string = "instructor";
let password5: string = "letmein";
let instructorId5: number = 5;

let phone: number;
let isMarried5: boolean;

// Numbers
let age5: number = 26;

// Strings
let companyName5: string;
companyName5 = "String";

// Booleans
let isLoggedIn5: boolean = false;
let isLoggedOut5: boolean = true;

// Array
// if you state "string[]" you have an array of strings
let studentList5: string[] = ["name", "age", "height"];
let allScores5: Array<number> = [12, 44, 55, 21];

// Any
/*
We can toggle off forced types by using the "any" data type. It is commonly used for API calls, but practice is to use unknown. The Any data type is essentially turning typeScript off.
*/
let dataFromThirdParty5: any = "12345";
dataFromThirdParty5 = 12345;


// Void
/*
A Void data type has no data type at all - it's basically the complete opposite of Any. You may commonly see this as a return type of function that do not return a value
*/
function sayHelloToAll5():void{
    console.log("Hello to all!");
    // return "string";    
}

// Null & Undefined
let undefinedVariable5: undefined = undefined;
let nullVariable5: null = null;

// Tuple
/*
Tuple types allow you to create an array with multiple different types. You will still have a fixed number of items in the array, but the items need to be different types. This is great for key value pairs.
*/

let userNameAndId5: [string, string, number, boolean];
userNameAndId5 = ["string", "string", 5, true];


// Enum
enum WeaponType5 {Sword, Saber, Spear};
let weapon5: WeaponType5 = WeaponType5.Sword;

enum CardType5{Ace5 = 1, Two5, Three5, Four5};
let cardType5: string = CardType[2];
console.log(cardType);

// Union Types
/*
Union Types allow us to have more flexibility with our variables, but we still intend on declaring what type(s) the variable should expect
*/

let w: number | string;
w = 5;
w = "five"





