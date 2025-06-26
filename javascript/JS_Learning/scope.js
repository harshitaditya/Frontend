if(true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a)            // it will show error because let can not access outside the scope.
// console.log(b)           // it will show error because const can also not access outside the scope.
console.log(c)             // it will print the value because it can access outside the scope.

function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);   //it can access the username because username is global variable for two function.
    }
    // console.log(website);    // error because website variable is inside the scope.
    two()
  

}

one()


console.log(addone(5))    // it will work properly because function is not stored in variable.

function addone(num){
    return num + 1
}



// console.log(addTwo(5))      //if we use here it show error because this function is stored in variable and that variabe is declare below.
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)) 
