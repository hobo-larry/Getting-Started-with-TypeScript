"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let something;
function handleSomething(document) {
    console.log(document);
}
let arr = [1, 2, 3, "2"];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, "2"];
const small = 10;
const medium = 15;
const large = 20;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let value = "a";
if (typeof value === "string")
    console.log(value.toUpperCase());
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("bad balance");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "mosh", 0);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Mosh2";
seats["A1"] = "Mosh";
console.log(seats);
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking test...");
    }
}
let student = new Student(1, "john", "wick");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("Mosh", "simpson");
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
printNames([
    new Student(1, "john", "farias"),
    new Teacher("anatoly", "bersurk"),
    new Principal("Agustina", "johnson"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class ExPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employee = {
    name: "John Smith",
    salary: 50000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: 3144,
    },
};
class KeyValueType {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
}
let getKey = new KeyValueType(1, "name");
let getKeystring = new KeyValueType("2", 2);
function wrapInArray(value) {
    return value;
}
let wrappedArr = wrapInArray(1);
function wrapInArray2(value) {
    return value;
}
let wrappedArr2 = wrapInArray2(1);
function echo(arg) {
    return arg;
}
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    constructor(id) {
        this.id = id;
    }
}
function Component(constructor) {
    console.log("component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => console.log("inserting the component in the dom");
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
//# sourceMappingURL=index.js.map