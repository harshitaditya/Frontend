let myhero=["Thor","Spiderman"];

let heropower={
    Thor:"Hammer",
    Spiderman:"Sling",

    spidermanpower:function(){
        console.log(`Spider Man Power is ${this.Spiderman}`);
    }
}
// console.log(heropower);
// console.log(heropower.spidermanpower());



//By adding a method to Object.prototype, the method becomes available to all objects created in your JavaScript code.

Object.prototype.power=function(){           //This code adds a method called power to the Object.prototype in JavaScript.
    console.log(`All superman have Unique Super Power`);
}
heropower.power();
myhero.power();         //here power method work because myhero is array and array is object.

Array.prototype.hero=function(){
    console.log(`Array have some of marvel heroes`)

}
myhero.hero();      //here hero method only work in array because here we create Array.prototype it is not access by object because array is object but not an object is array.
// heropower.hero();  //Error because heropower is object.

let username="Aditya      "
String.prototype.truelength=function(){
    console.log(this);     // this refer to the String 
    console.log(`True length is ${this.trim().length}`);
}
username.truelength();     //here this is Aditya because here We choose username.
"chai".truelength();       // here this is chai.




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   //old syntax
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TASupport.makeAssignment);
console.log(TASupport.isAvailable);
console.log(TeachingSupport.makeVideo);