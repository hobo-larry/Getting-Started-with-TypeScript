import { Square, Circle } from "./shapes";
import {calculateTax2} from "./tax"
import * as _ from "lodash"

 let income = calculateTax2(10_000)
 console.log(income);
 



// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let something; //type any, can be number bool or string(not recommended)

// function handleSomething(document: any) {
//   //not recommended
//   console.log(document);
// }
// https://www.typescriptlang.org/tsconfig/#strict

// let arr = [1, 2, 3, "2"]; //this is a normal arr in js so its ok but if i want only num arr or string arr i should declare
// let arr2: number[] = [1, 2, 3, 4]; //expects only numbers in the arr

//tuples in ts

// let arr3: [number, string] = [1, "2"]; // this is a tuple and it expects a number and a string only, cant add a third

/////////

//enums
// const small = 10;
// const medium = 15;
// const large = 20;

//PasccalCase
const enum Size {
  Small = 1,
  Medium,
  Marge,
} //by default it sets the small to 1 and increase the rest by 1. I can change the first value to any value and it increases the the rest. If i want to add like a string to it example (s, m , l) for sizes i would have to explicitly declare it like small="s"
let mySize: Size = Size.Medium;
console.log(mySize); // this prints number 2 because Small is 1 and it gets increased by 1 like i said above by the compiler
//////////

//functions

function calculateTax(income: number, taxYear: number): number {
  //here we declared that the income is a number and that the return is also a number
  if (taxYear < 50_000) return income * 1.2;

  return income * 1.3;
}

calculateTax(10_000, 2022);

//objects

// let employee:{
//     readonly id:number,// with the read only i cant change this value later on like (employee.id=2)
//     name:string,
//     retire: (date:Date) => void
// } = {
//     id:1,
//     name:"john",
//     retire: (date:Date)=>{
//         return console.log(date);

//     }
// }

//type aliases
// type Employee={
//      readonly id:number,
//     name:string,
//     retire: (date:Date) => void

// }
// let employee: Employee ={
//     id:1,
//     name:"john",
//     retire: (date:Date)=>{
//         return console.log(date);
// }}

//union types

// function kgToLbs(weight: number | string): number{
//     //Narrowing
//     if(typeof weight === "number" )
//         weight * 2.2

//     else
//     return parseInt(weight) * 2.2
// return weight

// }

// kgToLbs(10)
// kgToLbs("10")

//intersection types

// type Draggable ={
//     drag:()=> void
// }
// type Resizable ={
//     resize: ()=> void
// }

// type UiWidget = Draggable & Resizable ;

// let textBox: UiWidget={
//     drag:() =>{

//     },
//     resize:() =>{

//     },
// }

//literal types

// type Quantity =100 | 50 // can only be 100 or 50
// let num: Quantity= 50 //added it here

// type Metric = "cm" | "m"; //same applies for strings

//Nullable types
// function greet(name:string | null| undefined){
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log("hola");

// }
// greet(null)//to pass null or undefined, we either add turn off the setting on tsconfig, or pass it up there in the parameters

//Optional chaining

type Customer = {
  birthday?: Date; //optional because of the  ?
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) //this can be avoided with just (?.) also known as Optional property access operator
console.log(customer?.birthday?.getFullYear()); //so this piece of code only gets executes if we have a customer that is not null or undefined, no need to use ifs

//optional element access operator

//customer?.[0]

//optional call
// let log: any = null;
// log?.("a")

//nullish coaelsching operator
// let speed: number | null = null;
// let ride = {
//   speed: speed ?? 30, //if speed is not null or undefined, use that value, else use 30
// };

//EXERCISES

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

// type Bird = {
//   fly: () => void;
// };
// type Fish = {
//   swim: () => void;
// };

// type Pet = Bird & Fish;


//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc
// type DayOfTheWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

// Simplify the following code snippets:

// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// let x = foo !== null && foo !== undefined ? foo : bar();

// console.log(user?.address?.street);
// let x = foo ?? bar();

//What is the problem in this piece of code?

//let value: unknown = 'a';
// console.log(value.toUpperCase());

let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase()); //have to narrow down to a specific type before doing any operations on it

class Account {
  // readonly id: number;
  // name: string;
  // private _balance: number;
  nickname?: string;
  constructor(
    public readonly id: number,
    public name: string, //use this instead of declare it above and repeat it down here, its called parameters properties
    private _balance: number
  ) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("bad balance");
    this._balance += amount;
  }
  // private calculateTax(){} //cannot access outside this class because its private

  get balance() {
    //this is a getter, it gets the value of the balance
    return this._balance;
  }

  // set balance(value:number){//this is a setter, it sets the value
  //     if(value <= 0)
  //         throw new Error ("invalid value")
  //     this._balance = value
  // }
}
let account = new Account(1, "mosh", 0);
console.log(account.balance); //works with the getter above

//index signatures

class SeatAssignment {
  //index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Mosh2";
seats["A1"] = "Mosh"; //same as above

console.log(seats);

//static Members

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);

//inheritance

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName); //here im getting what i want from the person class that i inheritat, have to add it above first and the  here
  }
  takeTest() {
    console.log("taking test...");
  }
}
// let student = new Student(1, "john", "wick");

// console.log(student.fullName);

//method overriding

class Teacher extends Person {
  override get fullName() {
    //overrinding the method on Person class to this specifc class
    return "Professor " + super.fullName; //or `Professor ${this.firstName} ${this.lastName} ` same thing
  }
}
// let teacher = new Teacher("Mosh", "simpson");
// // console.log(teacher.fullName);

//polymorphism
//with polymorphism classes should be open for extension but closed for modification - called open closed principal

class Principal extends Person {
  override get fullName() {
    // the override is very important for the polymorphism to work
    return "Principal " + super.fullName;
  }
}
printNames([
  new Student(1, "john", "farias"),
  new Teacher("anatoly", "bersurk"),
  new Principal("Agustina", "johnson"),
]);
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

//private vs protected is that protected can be inherited and added to a new class that extends the one he is and with private u cant, can only be called in the class where it got called

//abstract classes and methods

// abstract class Shape{//using abstract to make it not be able to create an instance of it, because its not ready, it needs other things
//     constructor(public color: string){}
//     abstract render():void //abstract this as well, its uncooked and abstract methods like this one can only exist inside an abstract class
// }

// class Circle extends Shape{
//     constructor(public radius: number, color:string){
//         super(color)
//     }
// }

// let shape = new Shape("red") //this doest make sense because Shape class is not ready, its like an uncooked meal, it needs another class to extend it, thats why u use abstract on Shape class

//interface

// abstract class Calendar {
//     constructor(public name: string){}
//     abstract addEvent():void
//     abstract removeEvent():void
// } since this is just declaring and its not doing anything its better to use interface, example bellow

// interface Calendar {
//   //code is shorter and it doesnt appear in normal js, way cleaner
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

//only use interfqace if it doesnt have any logic or value in it

// interface CloudCalender extends Calendar {
//   sync(): void;
// }

// class GoogleCalendar implements Calendar {
//   //instead of extend we use implements, to get the things from interfaces
//   constructor(public name: string) {}
//   addEvent(): void {
//     throw new Error("Method not implemented.");
//   }
//   removeEvent(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// type Calendar2={
//     name: string;
//     addSD():void
// } same shit as interface

// Exercises
// • Define a class called Logger that takes the name of a file in its constructor and provides
// a method for writing messages to that file. Don’t worry about the actual file I/O
// operations. Just define the class with the right members.

// class Logger {
// constructor(public logFile: string) {}
// log(message: string) {}
// }

//Given the Person class below, create a getter for getting the full name of a person

// class ExPerson {
//   constructor(public firstName: string, public lastName: string) {}
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

//create a new class called Employee that extends Person and adds a new property called salary.

// class Employee extends Person {
//   constructor(public salary: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
// }

//What is the difference between private and protected members?
//answer: protected can be inherited while private cant

//Given the data below, define an interface for representing employees:

// let employee = {
//   name: "John Smith",
//   salary: 50_000,
//   address: {
//     street: "Flinders st",
//     city: "Melbourne",
//     zipCode: 3144,
//   },
// };

// interface Address {
//   street: string;
//   city: string;
//   zipCode: number;
// }
// interface Employee {
//   name: string;
//   salary: number;
//   address: Address;
// }

//Generics class

//this is a normal class
// class KeyValueType{
//     constructor(public key:number, public name: string){}
// }

// let getKey = new KeyValueType(1,"2")

//Generics applied, so i can reuse this easy
// class KeyValueType<T, C> {
//   //can add 1 or more
//   constructor(public key: T, public name: C) {}
// }

// let getKey = new KeyValueType<number, string>(1, "name");
// let getKeystring = new KeyValueType<string, number>("2", 2);

//Generic function

// function wrapInArray(value:number){
//     return value

// }

// let wrappedArr = wrapInArray(1)

// function wrapInArray<V>(value: V) {
//   return value;
// }

// let wrappedArr = wrapInArray<number>(1); //same rules applies here

//Generics constraints

// function wrapInArray2<V extends number | string>(value: V) {
//   // (extends number | string ) means it can only accept string or numbers, nothing else
//   return value;
// }

// let wrappedArr2 = wrapInArray2<number>(1); //same rules applies here

//EXERCISES

// Convert the function below to a generic function:
// function echo(arg) { return arg; }
// function echo<T>(arg: T) {
//   return arg;
// }

//When compiling the following piece of code, we get an error saying ‘Property name
//does not exist on type T’. How can we solve this problem?
// function printName<T>(obj: T) {
// console.log(obj.name);
// }

// function printName<T extends { name: string }>(obj: T) {
//   console.log(obj.name);
// }

//An Entity should have a unique identifier. The type of identifier, however, is dependent
//on the use case. In some cases, the ID might be a number, in other cases, it might be a
//string, GUID, etc. Represent the entity using a generic class

// class Entity<T extends number | string> {
//   constructor(public id: T) {}
// }

//Given the following interface, what does keyof User return?

// interface User {
//   userId: number;
//   username: string;
// }

//it returns a union of the properties of User: ‘userId’ | ‘username’

//Decoratos


//clss decorators
// function Component(constructor: Function) {
//   console.log("component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDom = () =>
//     console.log("inserting the component in the dom");
// }

// @Component
// class ProfileComponent {}





//exercises 

//Create a decorator for adding a sauce to Pizza instances:
//@Sauce('pesto')
//class Pizza 5j5t

// function Sauce(sauce:string){
//   return (constructor:Function)=>{
//     constructor.prototype.sauce = sauce

//   }

// }

// @Sauce('pesto')
// class Pizza {}






//Modules


let circle = new Circle(1)
console.log(circle);

let square = new Square(2)
console.log(square);



