class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return this.password.split('').reverse().join('');
    }

    changeUsername(){
        return this.username.toUpperCase();
    }
}

let user = new User("Pavan", "pavan@gmail.com", "123")

console.log(user);
console.log(user.encryptPassword());
console.log(user.changeUsername());

// Output:
// User { username: 'Pavan', email: 'pavan@gmail.com', password: '123' }
// 321
// PAVAN

// Behind the scenes:

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return this.password.split('').reverse().join('');
}

User2.prototype.changeUsername = function(){
    return this.username.toUpperCase();
}   

let user2 = new User2("Pavan", "pavan@gmail.com", "123")

console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUsername());

// Output:
// User2 { username: 'Pavan', email: 'pavan@gmail.com', password: '123' }
// 321
// PAVAN