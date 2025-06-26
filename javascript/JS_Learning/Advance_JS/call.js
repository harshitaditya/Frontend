function setusername(username){
    this.username=username;
    console.log("Called");  

}
function createuser(username,email,password){
    // setusername(username)            // without using call , the this context inside SetUsername does not refer to the newly created createUser object, but rather to the global object which is 'setusername' so it only show output "called".
    setusername.call(this,username)    //setusername.call is used to ensure that 'this' context inside the setusername is indicating to the username of createuser.
                                       
    this.email=email;
    this.password=password;
}
const user1=new createuser("Aditya","Ak@GMAIL.COM","Ad@123");
console.log(user1);