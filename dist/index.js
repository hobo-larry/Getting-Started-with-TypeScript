"use strict";
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
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let value = 'a';
if (typeof value === 'string')
    console.log(value.toUpperCase());
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("bad balance");
        this.balance += amount;
    }
}
let account = new Account(1, "mosh", 0);
console.log(account);
account.deposit(10);
console.log(account);
//# sourceMappingURL=index.js.map