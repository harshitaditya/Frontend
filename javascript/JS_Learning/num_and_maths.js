const num=100;
console.log(num);
const anothernum=new Number(100);
console.log(anothernum);
const tostring=new String(anothernum);
console.log(tostring);
// console.log(tostring.length);
console.log(anothernum.toFixed(2))
const number=123.45;
console.log(number.toPrecision(3));// it convert the value in precise form.
const hundreds=10000000000;
console.log(hundreds.toLocaleString());

//********************************************* *  Maths ******************************************************//

console.log(Math);
// console.log(Math.abs(-4));// it convert the negative value to the positive value not positive value to negative.
// console.log(Math.round(45.27));
// console.log(Math.ceil(45.65)); // ciel value give greater value.
// console.log(Math.floor(45.89)); // floor value gives lower value.
// console.log(Math.max(2,3,4,5,6));
// console.log(Math.min(34,3,1,46,1));
// console.log(Math.random()); // Math.random gives value between 0 and 1.
// console.log(Math.floor(Math.random()*10)+1); 

// if we want random betwwen some number so we do like this:
const min=1;
const max=6;
console.log(Math.floor((Math.random()*(max-min+1)+min)));
// console.log(Math.log10(10));

