function user(username,logincount,islogedin){
    this.username=username;             //this.username is variable and username is the value which we pass
    this.logincount=logincount;
    this.islogedin=islogedin;

    return this;
}
const userone=new user("Aditya",20,true);   //new is constructor function
const usertwo=new user("Anurag",10,false);
// console.log(userone);
// console.log(usertwo);
console.log(usertwo.constructor);       //output: [Function: user], constructor property is refernce of itself so it is function and function name is user.


// study: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof