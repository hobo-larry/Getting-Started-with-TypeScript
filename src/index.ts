let sales = 123_456_789;
let course = "TypeScript"
let is_published = true
let something; //type any, can be number bool or string(not recommended)

function handleSomething (document:any){//not recommended
    console.log(document);

}
// https://www.typescriptlang.org/tsconfig/#strict


let arr=[1, 2, 3, "2"] //this is a normal arr in js so its ok but if i want only num arr or string arr i should declare
let arr2: number[] = [1, 2, 3, 4] //expects only numbers in the arr




//tuples in ts

let arr3:[number, string]=[1,"2"] // this is a tuple and it expects a number and a string only, cant add a third



/////////

//enums
const small = 10
const medium = 15
const large = 20

//PasccalCase
const enum Size { Small =1, Medium, Marge}//by default it sets the small to 1 and increase the rest by 1. I can change the first vakue to any value and it increases the the rest. If i want to add like a string to it example (s, m , l) for sizes i would have to explicitly declare it like small="s"
let mySize:Size =Size.Medium;
console.log(mySize); // this prints number 2 because Small is 1 and it gets increased by 1 like i said above by the compiler
//////////



//functions

function calculateTax(income:number, taxYear:number):number{//here we declared that the income is a number and that the return is also a number
    if(taxYear <50_000)
        return income * 1.2

    return income *1.3
}

calculateTax(10_000, 2022)





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

type Customer ={
    birthday?:Date //optional because of the  ?
}

function getCustomer(id:number):Customer | null | undefined{
    return id === 0 ? null : {birthday:new Date()};

}
let customer = getCustomer(0)
// if (customer !== null && customer !== undefined) //this can be avoided with just (?.) also known as Optional property access operator
    console.log(customer?.birthday?.getFullYear());//so this piece of code only gets executes if we have a customer that is not null or undefined, no need to use ifs



    //optional element access operator

    //customer?.[0]

    //optional call
    // let log: any = null;
    // log?.("a")



    //nullish coaelsching operator
    let speed: number | null = null;
    let ride ={
        speed: speed ?? 30 //if speed is not null or undefined, use that value, else use 30
    }



//EXERCISES

    // Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

    type Bird ={
        fly: ()=> void
    }
    type Fish ={
        swim: ()=> void
    }

    type Pet = Bird & Fish;


        
//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc

type DayOfTheWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"



// Simplify the following code snippets:

// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// let x = foo !== null && foo !== undefined ? foo : bar();


// console.log(user?.address?.street);
// let x = foo ?? bar();


//What is the problem in this piece of code?

//let value: unknown = 'a';
// console.log(value.toUpperCase());

let value: unknown = 'a';
if (typeof value === 'string')
console.log(value.toUpperCase()); //have to narrow down to a specific type before doing any operations on it



class Account {
    id: number;
    name: string;
    balance: number;
    constructor(id:number, name:string, balance:number){
        this.id = id;
        this.name = name;
        this.balance = balance
    }
    deposit(amount:number):void{
        if (amount <= 0)
            throw new Error("bad balance");
        this.balance += amount
            
    }

}
let account = new Account(1,"mosh",0)
console.log(account);
account.deposit(10)
console.log(account);
