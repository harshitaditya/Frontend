// let name="Aditya";
// let repocount=20;
// console.log(name+" "+"your repocount is"+" "+ repocount);// but we not use this type of syntax.
// console.log(`Hi ${name} your repocount is ${repocount}`);// use back-ticks (``)(or String interpolation) rather than the quotes ("") to define a string
// let userid="aditya_kumar_1234"; //here it is string and another method to define string is
// console.log(userid); // here we do not create any object using new keyword then output is this (aditya-kumar-1234).
// // let userid=new String("aditya-kumar-1234");// here we create object 
// // console.log(userid); // in above line we create object using new keyword and in terminal it specify that it is string and it's show like this [String: 'aditya-kumar-1234'].
// console.log(userid.length);
// console.log(userid.toUpperCase());
// console.log(userid.charAt(2));
// console.log(userid.indexOf("k"));
// console.log(userid.split("_"));
// console.log(userid.substring(0,6));
// console.log(userid.slice(0,6));
// console.log(userid);
// const anothername="      Aditya      ";
// console.log(anothername);
// console.log(anothername.trim());
// const url="https://google.com/google%20chrome";
// console.log(url.replace ("20", "69"));
// console.log(url.includes("chrome"));// it checks that it present in given string.
// console.log(url.includes("Asitya"));
// let name2=new String("Aditya");
// console.log(name2);
// console.log(typeof(name2));

let myobj={
 name:"Sid",
 send:function(){
    console.log(`${this.name}`);
 }

}
myobj.name="Adi";
console.log(myobj.name);
myobj.send();




