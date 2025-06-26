// create object
//const jsuser=new Object() //singelton object

// object literals
const mysm=Symbol("mysymbol");
const jsuser={
    id:"abc123",
    name:"Aditya kumar",          // here the key is "name" and value is "Aditya kumar".
    gmail:"ak@gmail.com",
    "fathers name":"Anil kumar",
    [mysm]:"mysymbol1",
    location:"New Delhi",
    age:21,
    isloggedin:true,
    loginday:["Monday","Friday"]

} 
console.log(jsuser.name);
console.log(jsuser["fathers name"]);
console.log(jsuser);
// console.log(jsuser.id);
// console.log(typeof jsuser.name);            // data type is string
// console.log(typeof jsuser.isloggedin);     // datatype is boolean.
// console.log(typeof jsuser);               // datatype is object.
// console.log([mysm]);  
// console.log(jsuser["fathers name"]);                   // here datatype is object.

// // Another and good Method to print the key and value of object. 
// console.log( jsuser["id"]); 
// console.log( typeof jsuser["id"]);  //datatype is string.
// console.log(jsuser["name"]);
// console.log(typeof ["name"]);      // datatype is object.


// // if we want some changes in object:

// jsuser.gmail="akg@gmail.com";   // it will direct change in object.
// //console.log(jsuser);
// Object.freeze(jsuser);     // if we use freeze then after this line nothing will change in object jsuser.
// jsuser.age=22;            // this will not update in object.
// console.log(jsuser);

// // Add function in object
// jsuser.greetings= function(){
//     console.log("hello my name is Aditya kumar");
// }
// console.log( jsuser.greetings());

// // //using string interpolation

// jsuser.greetings2=function(){
//     console.log(`hello my name is ${this.name} and my gmail id is ${this.gmail}`);
//     // “This” keyword refers to an object that is executing the current piece of code. 
// }
// console.log(jsuser.greetings2());

 jsuser.greetings=function(){
    return `My name is ${this.name},and age is ${this.age}`;   //now it does not show undefined because it have return type.
                                                               // The concept of returning undefined in JavaScript comes from the language's design. If you don't provide an explicit return value in a function, the function is considered to have completed execution without returning anything, and JavaScript automatically assigns it the value of undefined.
}
console.log(jsuser.greetings());






