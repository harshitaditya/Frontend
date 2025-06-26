class user{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`Username is ${this.username}.`)
    }
}
class Teacher extends user{
    constructor(username, email, password){
        // The super keyword is specifically designed to work within classes in JavaScript. (in function we use setusername.call(this,username)as we study in call.js)
        super(username)          //super(username): Ensures that the constructor of the base class user is called, initializing the username property.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const user1=new Teacher("Aditya","Ak@gmail.com","Aditya@12345")
console.log(user1);
user1.logme();
user1.addCourse();