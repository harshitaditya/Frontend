// for loop
// for (let index = 0; index <= 10; index++) {
//     let ans=index
//     if(ans==5){
//         console.log("5 is best number");
//     }
//     console.log(ans)
// }
// console.log(ans)   //error because ans is declared inside the scope

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`Table of ${i} is ${i}*${j} = ${i*j}`);
        
    }
    
}

let myarray=["Aditya","Anurag","Shourya"]
console.log(myarray.length);
for (let arr = 0; arr < myarray.length; arr++) {
    const element = myarray[arr];
    console.log(element);
    
}

//Break and Continue Statement

// for (let i = 0; i < 10; i++) {
//     const element =i;
//     if(element == 5){
//         console.log("5 is Best number");
//         break;                        // After break Statement nothing will print.
//     }
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     const element =i;
//     if(element == 5){
//         console.log("5 is Best number");   // within this scope anything which have to print that will print.because it satisfy the condition then it will enter in this scope.
//         continue;                        // except this iteration all will print. means 5 will print.
//     }
//     console.log(element);
// }


//******************************************************Do-While loop**********************************************//
let i=1
while (i<=10) {
    let ans=i;
    console.log(ans);
    i++;
    
}

let myarray2=["Aditya","Anurag","Shourya"]
let j=0
while (j<myarray2.length) {
    let ans=myarray2[j];
    console.log(ans);
    j++;
    
}

let score=1
do{
    console.log(score);
    score++;

}while(score<=10)


