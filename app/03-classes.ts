// Classes
// 1.Using the class keyword, we create a new class called Person. Just to be clear, this is not part of TypeScript. This is part of ES6.
// 2.We create 2 properties with types in that class. Here TypeScript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.
// 3.We instantiate(create an instance) of the class by setting the type to Person and calling the new keyword to create a new instance of the class.
// 4.Back to the top code. We set the properties on the instance of the joeDude property.

//1
class Person1 {
  //2
  firstName: number;
  lastName: string;
}

//3
let phil: Person1 = new Person1();

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
let someVariableName: Person1 = new Person1();

// Methods
// 1. These two variables are the properties of the class. They should be above the methods.
// 2.Here we have a method. This is a function that prints "Hello, " then a name to the console.
// 3.this.firstName will refer to the firstName for the specific instance.
// 4.We instantiate the Person() class with a variable name of kenn.
// 5.We set the property of firstName to "Kenn" for this specific instance.
// 6.We call the method on the kenn object. Because the firstName of kenn is set to "Kenn", this will print "Hello Kenn" to the console.

class Person {
  //1
  firstName: string;
  lastName: string;

  //2
  sayHello() {
    //3
    console.log("Hello", this.firstName);
  }
}

//4
let kenn: Person = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello();

// Practice

class Person3 extends Person {
  // firstName: string;
  // lastName: string;

  // //2
  // sayHello() {
  //   //3
  //   console.log("Hello", this.firstName);
  // }

  sayHelloToFullname() {
    console.log("Hello", this.firstName, this.lastName);
  }
}
let sheriff: Person3 = new Person3();

sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullname();
sheriff.sayHello();

// Constructors
// 1.We create a new class called Game.
// 2.We create a constructor for the class that takes in a parameter that is of type string.
// 3.We set up a property called gameName.
// 4.We set the value of gameName equal to the value that is passed into the constructor's argument.
// 5.We create an instance of the Game class called battleship.
// 6.We pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:

//1
class Game {
  constructor(name: string, maker: string) {
    //2
    this.gameName = name; //4
    this.gameMaker = maker;
  }
  gameName: string; //3
  gameMaker: string;
}

//5                                 //6
let battleship: Game = new Game("Battleship", "Hasbro");

class GameWithoutConstructor {
  gameName: string;
  gameMaker: string;
}

// Comparison
// 1.Here we instantiate the class with no constructor.
// 2.Then, we have to set each of the properties, one at a time. With a constructor this could be done in one line of code.
//1
let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

//2
monopoly.gameName = "Monopoly";
monopoly.gameMaker = "Hasbro";

// Inheritance
// Here we have what's called a parent class. This holds all the properties that are going to be universal to all vehicles. With inheritance, we can make subclasses of Vehicle that hold these properties along with the properties that are unique to the subclass. 

class Vehicle {
  type: string;
  make: string;
  model: string;
  manufactureYear: number;
  run: boolean;
  topSpeed: number;
}

// Here is the syntax for a subclass with two examples:
// 1.The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.

// 2.Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie.

// 3.These are properties from the parent class, the Vehicle class. They are inherited properties.

//EXAMPLE ONE
//1
class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";

//EXAMPLE TWO
//1
class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
