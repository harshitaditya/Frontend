const user={
    _email:"ak2504@gmail.com",
    _password:"aditya@12@kumar",

    set email(value){
        this._email=value;

    },
    get email(){
        return this._email.toUpperCase();
    },
    
    set password(value){
        this._password=value;

    },
    get password(){
        return this._password.toUpperCase();
    }
}

const aditya=Object.create(user);
console.log(aditya.email);