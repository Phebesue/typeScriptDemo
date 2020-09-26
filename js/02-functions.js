// Type Safety in Arguments
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
// Practice
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
fullName("Summer", "Kerekes");
function hello(greetingString) {
    return greetingString;
}
console.log(hello("1"));
hello(1); //1
// Return Types
//1          //2
function sayHello(name) {
    return name;
}
sayHello("Kenn"); //3
// sayHello(1); //4
// function check(userName:string, pass:string): boolean{
//     if(userName=="elevenfiftyuser") && (pass=="Letmein1234!"){return true;}
// } else{
//     return false
// }
// console.log(check);
// Optiionals
//1                             //2
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4
function wholeName(fName, lName, mName) {
    console.log(mName);
    if (!mName) {
        return fName + " " + lName;
    }
    else {
        return fName + " " + mName + " " + lName;
    }
}
console.log(wholeName("Summer", "Kerekes"));
console.log(wholeName("Summer", "Kerekes", "Josette"));
/*
Annotations
  -annotations allow us to give our parameters data types as well as limit the number of arguments we pass in
*/
function demoFunction5(someNum) {
    return someNum;
}
console.log(demoFunction5(1));
console.log(demoFunction5("string"));
function addNumbers5(numOne5, numTwo5) {
    return numOne5 + numTwo5;
}
addNumbers5(1, 2);
// addNumbers5(1, 1, 2);
// Challenge
function fullName5(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName5("Summer", "Kerekes"));
// Return Types
/*
Return types allow us to specify what data type we should expect from the return of a function
*/
// Plain JS
function hello5(greetingString5) {
    return greetingString5;
}
hello5(1);
function sayHello5(name) {
    return name;
}
sayHello5("Summer");
// sayHello5(1);
function check(userName, pass) {
    if (userName == "elevenfiftyuser" && pass == "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
    console.log(check("elevenfiftyuser", "Letmein1234"));
}
// Optionals
// 1.The first two parameters, numOne and numTwo are not optional. 
// 2.The someString parameter is optional.
// 3.Since someString is optional, it does not require an argument when the function is called.
// 4.We can also call the function with an argument provided for someString.
// 5.If you hover over the function call you'll notice the type on someString? is a union type of string | undefined. If a value is passed in, it should be of type string. If a value is not passed in, it is of type undefined.
//1                             //2
function addNumbersWithOptional5(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4
//# sourceMappingURL=02-functions.js.map