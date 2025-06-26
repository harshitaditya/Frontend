class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){     
        return `123`
    }
}

const user1 = new User("Aditya")
// console.log(user1.createId())   // error ,The line console.log(user1.createId()); throws an error because createId is a static method. You cannot call createId on user1 (an instance of User). Instead, you should call createId directly on the User class itself:
console.log(User.createId());   //Static methods are called on the class itself, not on instances of the class.

class Teacher extends User {     
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const user2 = new Teacher("Anurag", "anu@gmail.com");
console.log(Teacher.createId());

//Static Method: createId is defined as a static method, so you must call it on the class itself (User.createId() or Teacher.createId()), 
// not on an instance of the class (user1.createId() or user2.createId()).

