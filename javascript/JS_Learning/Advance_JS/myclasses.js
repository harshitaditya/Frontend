class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptedpassword(){
        console.log(`${this.password}abc`)
    }
    changeusername(){
        console.log(this.username.toUpperCase())
    }
}
const user1=new user("Aditya","ak@gmail.com","Ak@21");
console.log(user1);
user1.changeusername();
user1.encryptedpassword();


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());