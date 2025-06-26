const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);
// output:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// value: This is the value of the property. For Math.PI, it's approximately 3.141592653589793.

// writable: This is a boolean that indicates whether the value of the property can be changed. For Math.PI, this is false, meaning you cannot change the value of Math.PI.

// enumerable: This is a boolean that indicates whether the property will show up during enumeration of the properties on the object (e.g., in a for...in loop). For Math.PI, this is false, meaning it does not show up in such loops.

// configurable: This is a boolean that indicates whether the property descriptor can be changed and whether the property can be deleted from the object. For Math.PI, this is false, meaning you cannot delete or reconfigure the PI property on the Math object.


const myobject={
    name:"Aditya kumar",
    roll:2102220100012,
    sec:"A"
}
// console.log(myobject);
const descriptor2=Object.getOwnPropertyDescriptor(myobject,"name");
console.log(descriptor2);
//here we can edit the writable,enumerable and configurable because object is created by me,
// and we can not modify in Math.pi because  When JavaScript defines certain built-in properties, such as Math.PI, they are often made non-writable, non-enumerable, and non-configurable to ensure that these critical values cannot be accidentally or maliciously changed.

Object.defineProperty(myobject, 'name', {
    writable: false,
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(myobject,"name"));


    for (const ob in myobject) {    //Because enumerable: false was set on the name property, it will not show up in this for...in loop. The loop will only print the properties roll and sec.
            console.log(ob);             
           console.log(myobject[ob]);    
        }
