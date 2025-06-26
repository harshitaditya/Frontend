// here we can declare the function in two ways:
// function add(){}           // this is first way.
// const add=function(){}    //  this another way it is called hold variable fuction.

function printname(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
printname();

function add(num1,num2){
    console.log(num1+num2);

}
add(3,4);
// const ans=add(3,4);
// console.log(ans);       //The reason the variable ans is undefined is that the add function does not return any value. In JavaScript, if a function does not explicitly return a value, it returns undefined by default.

function addtwonumber(num1 , num2){
    return num1+num2;

}
console.log(addtwonumber(10,12));



// function loginusermessage(username){
//     console.log(`hi ${username}, Welocome to the website.`);

// }
// loginusermessage(); // it show undefined because We do not declare the message.





// function loginusermessage(username){
//     if(username==undefined){
//         console.log("Please Enter the  username");        // here we manage the undefined case.
//         return;                                           // return is compulsory otherwise it return the next line also.
//     }
//     return `hi ${username}, Welocome to the website.`;

// }
// console.log(loginusermessage("Aditya_Ak"));


function loginusermessage(username="Aditya"){

    console.log(`hi ${username}, Welocome to the website.`);

}
loginusermessage();    // if we donot declare username then it bydefault take Aditya.

//***************************************** Rest operator**************************************//

function claculatecartorder(...num1){
    let sum=0;
    for(let i=0;i<num1.length;i++){
        sum+=num1[i]
    }
    return sum;

}
console.log(claculatecartorder(100,200,300,400,500));     
// console.log(claculatecartorder(100,200,300,400,500));       //The ...num1 syntax is called the rest parameter. It collects all the arguments passed to the function into a single array named num1.


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))         //val1 consider as 200 and val2 consider as 400 and here we print only num1 except val1 and val2 others are print.

// function with object
const course={
    name:"(Learn DSA With me)",
    instructorname:"Aditya",
    price:9999
}

function handleobject(anyobject){
    console.log(`hi my name is ${anyobject.instructorname} and course name is ${anyobject.name}`);
}
// handleobject(course);
//Alternate method
handleobject({
    name:"(Learn DSA by yourself)",
    instructorname:"Anurag"
})

// function with Array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

let books={
    id:1234,
    name:"Harry Potter",price:999
}
function mustread(arg){
    console.log(`you should read this book whose id is ${arg.id} , whose name is ${arg.name} and whose price is ${arg.price}`)

}
mustread(books);
