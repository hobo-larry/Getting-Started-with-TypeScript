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

let employee:{
    readonly id:number,// with the read only i cant change this value later on like (employee.id=2)
    name:string,
    retire: (date:Date) => void
} = {
    id:1, 
    name:"john",
    retire: (date:Date)=>{
        return console.log(date);
        
    }
}