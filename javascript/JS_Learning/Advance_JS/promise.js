const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task complete")
        resolve();

    },2000)

})

promiseone.then(function(){
    console.log("Async resolved");
})

// // Another way without store variable in any keyword
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2 task complete")
//         resolve();

//     },1000)

// }).then(function(){
//     console.log("Async resolved");
// })



// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Dazler_Adi" , gmail:"daziadi@gmail.com"})     //here we can also pass array,string,number,object etc..
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })

// // promise four

// const promisefour=new Promise(function(resolve,reject){
//     setInterval(function(){
//         let error=true;             // here error occured so we use catch function.
//         if(!error){
//             resolve({username:"Aditya" , gmail:"adi@gmail.com"})
//         }
//         else{
//             reject("Error something went wrong")
//         }
//     },1000)
// })

// promisefour.then(function(user){     //user is parameter
//     console.log(user);
//     return user.username;      
// }).then(function(username){         // operation was successful and  //here We do 'then chaining' so that we can print the username We can also print direct username using console(user.usernmae) but here We use return statement that's why we do 'then chaining'.
//     console.log(username);             
// }).catch(function(err){               // operation was rejectd
//     console.log(err);
// }).finally(function(){               // This will run no matter what.
//     console.log("The promise either resolved or reject");
// })


// // Async await 

// const promisefive=new Promise(function(resolve,reject){
//     setInterval(function(){
//         let error=true;             // here error occured so we use catch function.
//         if(!error){
//             resolve({username:"Javascript" , password:"adi@1234"})
//         }
//         else{
//             reject("Error JS went wrong")
//         }
//     },1000)
// })

// async function consumepromisefive(){             //consumepromisefive is a function name
//     try{      
//     const response=await promisefive
//     console.log(response)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// consumepromisefive();




////////////////////////////////////

// async function getalluser(){
//     try{
//       const response= await fetch('https://jsonplaceholder.typicode.com/users')
//       const data= await response.json()
//       console.log(data);
//     }
//     catch(error){
//         console.log("ERROR",error)
//     }
// }
// getalluser();



// using then function
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json();

// }).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log("ERROR",error);

// })


// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// An asynchronous operation in programming refers to a process that occurs independently of the main program flow, allowing the program to continue executing other tasks without waiting for the operation to complete. 
// Key Concepts of Promises
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise now has a resolved value.
// Rejected: The operation failed, and the promise has a reason for the failure (an error).

let anotherpromise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false
        if(!error){
        resolve({id:1,name:"Aditya"});
        }
        else{
            reject("Something is error")
        }
    })
},1000)//.then(function(obj){
//     console.log(obj)
//     return obj;
// }).catch(function(err){
//     console.log(err);
// })

async function asyncpromisefive(){
    try{
        const response=await anotherpromise
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

asyncpromisefive();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log("Error")
})


 
