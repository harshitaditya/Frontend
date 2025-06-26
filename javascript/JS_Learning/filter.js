// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
    // return item                            // for each does not return anything.
// } )

// console.log(values);                   //this line we use to print return value but the for each does not return anything.

// *******************************************Filter******************************************//

const mynum=[2,4,6,7,8,9,3,10]
// const ans=mynum.filter((item)=>{
//    return (item%2==0)
// });
// console.log(ans);

// Alternate Way of doing this Without using return statement
const ans=mynum.filter((item)=>(item%2==0))
console.log(ans);

//We can also do it byfor each loop
const newarray=[];
mynum.forEach(item => {
    if(item%2==0){
        newarray.push(item);
    }
    
});
console.log(newarray);


// Example of filter 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userbook=books.filter((bk)=>bk.genre==="Fiction")
//   userbook=books.filter((bk)=>{
//     return bk.edition>2000
// });


let userbook=books.filter((item)=>item.genre=="Fiction")

 
  console.log(userbook);

//   we can also use more than one inbuilt function ata time

const MyArray=[1,2,3,4,5,6,7,8,9,10]
const NewArray=MyArray
              .map((num)=>num*10)      // Firstly this will execute
              .map((num)=>num+1)       // Then this will Execute
              .filter((num)=>num>31)    //After that this will Execute
              console.log(NewArray);

 


   

