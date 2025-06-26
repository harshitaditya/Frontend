const user={
    name:"Aditya kumar",
    age:22,
   message: function(){
    console.log(`hi my name is ${this.name} and age is ${this.age}`);
    console.log(this);     //Since this refers to the user object, it logs the entire user object.

    }
}
user.message();
user.name="Anurag";
user.message();

console.log(this);       // Logs the global object and currently there is no global object so its show empty {} ('window' in a browser, 'global' in Node.js)

function test(){
    console.log(this);      // Logs the global object in non-strict mode.
}
test();


function test1(){
    let username="Aditya_ak"
    console.log(this.username);      //'undefined' in strict mode.
} 
test1();    


// Arrow function
const test2=()=>{
    let username="Aditya"
    // console.log(this)       // Inherits 'this' from the global context and there is no global object show this show empty {}.
    console.log(this.username);   // this will also show empty{}.
}
test2();

// Arrow function
// const sum=(sum1,sum2)=> sum1+sum2;
// console.log(sum(2,3));

// const sum=(sum1,sum2)=> (sum1+sum2);   //another way
// console.log(sum(2,3));


const addTwo = (num1, num2) => ({username: "Aditya"})


console.log(addTwo(2,3))   //output:{ username: 'Aditya' }
console.log(addTwo())    //output:{ username: 'Aditya' }

const sum=(a,b)=>a+b;
console.log(sum(2,3));

(()=>{
    console.log("gfdfhvj");
})
();

function greet(name,callback){  //callback is a function that passed as an argument to the another function
    console.log(`my name is ${name}`);
    callback();
}
function goodbye(){
    console.log(`goodbye`);
}
greet("Aditya",goodbye)


function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Calls the callback function
}




