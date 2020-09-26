// Classes
// 1.Using the class keyword, we create a new class called Person. Just to be clear, this is not part of TypeScript. This is part of ES6.
// 2.We create 2 properties with types in that class. Here TypeScript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.
// 3.We instantiate(create an instance) of the class by setting the type to Person and calling the new keyword to create a new instance of the class.
// 4.Back to the top code. We set the properties on the instance of the joeDude property.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
//3
var phil = new Person1();
//4
phil.firstName = 3;
phil.lastName = "Donahue";
console.log(phil);
// Intantiation
// 1.We declare a variable with our own custom name.
// 2.We declare the type. It's a custom type of Person.
// 3.We use the new keyword to instantiate a new instance.
// 4.We call the class with parens. The parens invoke the constructor function.
//1                 //2         //3    //4
var someVariableName = new Person1();
// Methods
// 1. These two variables are the properties of the class. They should be above the methods.
// 2.Here we have a method. This is a function that prints "Hello, " then a name to the console.
// 3.this.firstName will refer to the firstName for the specific instance.
// 4.We instantiate the Person() class with a variable name of kenn.
// 5.We set the property of firstName to "Kenn" for this specific instance.
// 6.We call the method on the kenn object. Because the firstName of kenn is set to "Kenn", this will print "Hello Kenn" to the console.
var Person = /** @class */ (function () {
    function Person() {
    }
    //2
    Person.prototype.sayHello = function () {
        //3
        console.log("Hello", this.firstName);
    };
    return Person;
}());
//4
var kenn = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello();
// Practice
var Person3 = /** @class */ (function (_super) {
    __extends(Person3, _super);
    function Person3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // firstName: string;
    // lastName: string;
    // //2
    // sayHello() {
    //   //3
    //   console.log("Hello", this.firstName);
    // }
    Person3.prototype.sayHelloToFullname = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Person3;
}(Person));
var sheriff = new Person3();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullname();
sheriff.sayHello();
//# sourceMappingURL=03-classes.js.map