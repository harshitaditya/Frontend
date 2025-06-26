// const isloggedin=true;
// if(isloggedin){
//     console.log("Executed");
// }

// const temperature=42;
// if(temperature<=45){
//     console.log("Temperatue is less than 45 ")
// }
// else{
//     console.log("Temperature is greater than 45")
// }

const score=200
if(score>100){
    let power="fly";
    console.log(`Score is ${score} and power ${power}`)
}
// console.log(`Score is ${score} and power ${power}`)    // this will show error because power is define inside the scope.

let amount=1000;
// if(amount>900) console.log("amount is greater than 900"),console.log("amount is 1000");      //we can also write like this but tis is not good practice of writing code.

//else-if statement

if(amount<1000){
    console.log("amount is less than 1000")
}
else if(amount>1000){
    console.log("Amount is greater than 1000")

}
else{
    console.log("Amount is 1000")
}
    
    const userLoggedIn = true
    const debitCard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true
    
    if (userLoggedIn && debitCard && 2==2) {     // here both condition should correct the it will enter the scope.
        console.log("Allow to buy course");
    }
    
    if (loggedInFromGoogle || loggedInFromEmail) {    // here any one of the condition should correct then it will enter the scope.
        console.log("User logged in");
    }

    
