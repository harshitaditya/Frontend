class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    set email(value){               //When you set this.email = email in the constructor, it calls the set email(value) method and stores the value in a private variable _email.
        this._email=value;         //Why use _email instead of email? By convention, _email (with the underscore) is used as the "private" variable to avoid direct access from outside the class and to differentiate it from the getter and setter names.

    }
    get email(){                 //When you use user1.email, it will call the get email() method and return the _email property in uppercase using this._email.toUpperCase().
        return this._email.toUpperCase();
    }

    set password(value){
        this._password=value;
    }
    get password(){
        return this._password.toUpperCase();
    }
}
const user1=new user("ak@2504gmail.com","Aditya@8989");
console.log(user1);         //here 'ak@2504gmail.com' store in _email and 'Aditya@8989' is store in _password.

console.log(user1.email);
console.log(user1.password);
