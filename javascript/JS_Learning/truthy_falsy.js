const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

let myarray=[];

if (myarray.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}


if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       // here it will print the first value if there is null or undefined than it will print second value.
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined   // if there null or undefined then it will print undefined.
val1 = null ??15 ??20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const amount=1000
amount<=2000?console.log("Amount is less than 2000"):console.log("Amount is greater than 2000");


let myname="Aditya"
myname==="Anurag"?console.log(`my name is ${myname}`):console.log(`my name is not ${myname}`);