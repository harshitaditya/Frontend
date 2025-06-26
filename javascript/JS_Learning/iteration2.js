// // for of
let arr=[1,2,3,4,5,6,7,8]
for (const i of arr) {
   
    console.log(i);
    
}

// let arr1=["SpiderMan","Captain America","Iron Man","Hulk"]
// for (const hero of arr1) {     //here hero is iteraation
//     console.log(hero);
// }

// const superhero="Spider Man"
// for (const hero of superhero) {
//     // console.log(`${hero}`);
    
// }
// const map=new Map()                  // Map contain only unique value.
//     map.set("India","New Delhi")
//     map.set("Pakistan","Islamabad")
//     map.set("Uttar Pradesh","Lucknow")
//     map.set("Gujarat","Gandhinagar")
// //    map.set("India","New Delhi")         // Map contain only unique value.

//     for (const [key,value] of map) {   
//         console.log(`${key} :- ${value}`);
        
//     }


//     for (const capital of map) {   // capital is iterator
//         console.log(capital);
        
//     }

    // const myobject={   // in object we can not use (for of) loop

    //     name1:"Aditya kumar",
    //     name2:"Anurag kumar",
    //     name3:"Shourya kumar",
    //     name4:"Saurav kumar"
    // }
    // for (const ob of myobject) {
    //     console.log(ob);
        
    // }

//************************************For in loop*****************************************************//

// const myobject={   
    
//         name1:"Aditya kumar",
//         name2:"Anurag kumar",
//         name3:"Shourya kumar",
//         name4:"Saurav kumar"
//     }
//     for (const ob in myobject) {
//         console.log(ob);             //ob just print key like name1,name2,name3,name4
//        console.log(myobject[ob]);    // to print the value.
//     }





// const myarray=[10,20,30,40,50,60,70,80,90]
// for (const arr in myarray) {
//    console.log(arr);        //For in loop if we print only arr then it print only the index like 0,1,2,3,4....
//    console.log(myarray[arr]);       // to print the array value we have to print like this.
// }

// const map1 = new Map()      // in map for in loop does not work.
// map1.set('IN', "India")
// map1.set('USA', "United States of America")
// map1.set('Fr', "France")
// map1.set('IN', "India")

// for (const key in map1) {
//     console.log(key);
// }

//*************************************For Each loop*******************************************//
let arr2=["Py","Java","C++","JavaScript"]
// arr2.forEach((item) => {         //using arrow function.
//     console.log(item)
// });

arr2.forEach(function(item){       // using function
    // console.log(item);
    
});
function printme(item){
    console.log(item);
}
arr2.forEach(printme);

arr2.forEach((item,index,arr2)=>{
    console.log(item,index,arr2);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
const ans=myCoding.forEach((item) => {
    console.log(item.languageName);
         
    
})



//*********************************************************************revision ******************************//
// let mymap=new Map();
// mymap.set("India","New Delhi");
// mymap.set("Pakistan","Islamabad");
// mymap.set("Bihar","Patna");

// for(let i of mymap){
//     console.log(i);
// }

// for(let [i,j] of mymap){
//     console.log(j);
// }

// let anotherobj={
//     id:1,
//     name:"Aditya",
//     age:20

// }
// for(let i in anotherobj){
//     console.log(anotherobj[i]);
// }


let anotherarr=[2,4,6,8,10,12]
// anotherarr.forEach((item,index,arr)=>{
//     console.log(item+" "+index+" "+arr);
// })

let ans1=anotherarr.filter((item)=>item>4)
console.log(ans1);

              


