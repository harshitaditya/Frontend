let array=[1,2,3,4,5,6];
console.log(array);
console.log(typeof(array));
console.log(array.reduce((sum)=>sum+=sum));
// let myarray=new Array(1,2,3,4,5,6,7);// here we create object name of myarray using new keyword.
// console.log(typeof myarray);
// console.log(myarray);
// const cartoons=["Doremon","ninja","sinchan"];
// console.log(cartoons[0]);
const newarray=new Array(1,2,3,4,"Aditya",[[1,2,3]]);// here it treat individual as array for ex: in array we use "Aditya" it also treat as indiviual array.
console.log(newarray);
// //output:[ 1, 2, 3, 4, 'Aditya', [ 1, 2, 3 ] ].
// console.log(newarray.flat(2));
// above line of code spearte the array we use 1 because it break array inside array here only one array inside array that's why use 1.instead of specific number we can use infinity.

let arrayinarray=[1,2,3,[4,5,[2,1],2,9],4,5,[1,[2,3],[5,6]]];
console.log(arrayinarray.flat(Infinity));


array.push(7);
console.log(array);// it insert at last.

array.pop();
console.log(array);// it pop from last.

array.unshift(0);
console.log(array);// here it push the value at first of the index.
array.shift();
console.log(array);

const newarray1=array.join();
console.log(newarray1); // it convert the array in string.
console.log(typeof newarray1);// string.


// //slice,splice
 
// console.log("A",array);
// let myn1=array.slice(1,3);
// console.log(myn1);// output:[ 2, 3 ] it print the value from pos 1 and 2 only not 3. 
// console.log(array);//output:[ 1, 2, 3, 4, 5, 6 ] in slice it don't change the original value.

// console.log("B",array);
// let myn2=array.splice(1,3);
// console.log(myn2);// output:[ 2, 3,4 ] it print the value from pos 1 to 3.
// console.log(array);// output:[ 4, 5, 6 ] in splice it have changes in original value but not in slice.


const marvel_heroes=["Spiderman","Captain America","Iron Man"];
const dc_heroes=["Batman","Superman","Flash"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);// here output is:['Spiderman','Captain America','Iron Man',[ 'Batman', 'Superman', 'Flash' ]], [ 'Batman', 'Superman', 'Flash' ] it treat as index 3.

console.log(marvel_heroes[3][0]);

const allheroes=marvel_heroes.concat(dc_heroes);
console.log(allheroes);



const all_new_heros = [...marvel_heroes, ...dc_heroes]// this is called spread.
console.log(all_new_heros);


console.log(Array.isArray([1,2,3]))
console.log(Array.from("Aditya"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));