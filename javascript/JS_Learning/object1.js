const instauser={}; //literals object
instauser.id="adityakumar__ak";
instauser.name="Aditya kumar";
instauser.age=21;
instauser.email="Aditya@insta.com";
instauser.isLoggedin=true;
// console.log(instauser);

//there can be object inside object.
 const school={
    name:"BD Public School",
    location:{
        name:"Ara",
        Address:{
            locality:"Nawada thana Ara"
        }

    }
 }
 console.log(school);         
//  console.log(school.location.name); // we can access any of the value like this.
//  console.log(school.name); // in object we use two name here we want acces school name that's why we use (school.name)
 console.log(school.location.Address);
 console.log(school.location.Address.locality)


// merge two or more object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 ,obj4}
// console.log(obj3);


// const obj3 = Object.assign(obj1, obj2, obj4)          // here all key and value of obj2 and obj4 will store in obj1.
// // console.log(obj3===obj1);                          // obj3 is assigned to obj1 and obj2, so both variables reference the same object. Therefore, obj3 === obj1 returns true.
// console.log(obj1);                                 // here obj2 and obj4 key and value will assign in obj1 that's why obj1 show all the key and vaue.


const obj3 = Object.assign({}, obj1, obj2, obj4)            //Object.assign({}, obj1, obj2, obj4) creates a new object (obj3) that contains all properties from obj1, obj2, and obj4.
console.log(obj3);                                         
console.log(obj3===obj1);                                   //obj3 is a new object with its own reference, distinct from obj1.Therefore, (obj3 === obj1) is false because they are not the same object in memory.
 
//Link for object assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



//spread in object it is same as Array spread using ... this symbol we can spread:

const merge={...obj1,...obj2,...obj4};
console.log(merge); 

// some inbuilt properties of object:

console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));

console.log(instauser.hasOwnProperty('isLoggedin'));

// object inside array:

const users = [
    {
        id: 1,
        email: "ak@gmail.com"
    },
    {
        id: 2,
        email: "lulu@gmail.com"
    },
    {
        id: 3,
        email: "akg@gmail.com"
    },
]

console.log(users[0].id+","+users[0].email);
console.log(users[1].id+","+users[1].email);
console.log(users[2].id+","+users[2].email);


//object destructure

const course={
    coursename:"Learn javascript with me",
    courseinstructor:"Aditya",
    price:999
}

const {courseinstructor}=course;
console.log(courseinstructor);

const {courseinstructor:instructor}=course; // We can also rename the key.
console.log(instructor);

//json
// in earlier days data come from backend in xml form but now a days it come in json form.
//in Json all the key and value is in {}.

// {
//     "name": "Aditya",                //here all the key have " " and only string value have " ".
//     "coursename": "js in hindi",
//     "price": 999
//     
// }

// json inside Array

[
    {},
    {},
    {}
]




