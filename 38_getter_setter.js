class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }       

    // Cannot set property password of #<User> which has only a getter (If only getter is defined)
    get password(){
        // return `${this.password}newPassword`;
        // Even though we are setting the value to password property, If the user tries to get the value, newPassword will be appended to the password.
        return `${this._password}newPassword`;
    }

    set password(value){
        // Error: Maximum call stack size exceeded
        // this.password = value;
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();;
    }

    set email(value){
        this._email = value;
    }
}

const pavan = new User('pavan@gmail.com', 'abcd');
console.log(pavan.email); // Output: PAVAN@GMAIL.COM
console.log(pavan.password); // Output: abcdnewPassword

// Why we get maximum call stack size exceeded error?
// In the setter function, we are trying to set the value to password property.
// But, constructor is also trying to set the value to password property.
// So, it will go into infinite loop where both are trying to set the value to password property.
// So, we get maximum call stack size exceeded error.

// How to fix this error?
// We need to change the property name eg: _password

// Note: The name of the getter and setter should be same as the property name.

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// Older way of defining getter and setter
function User2(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password}newPassword`;
        },
        set: function(value){
            this._password = value;
        }
    });
}

const pavan2 = new User2('pavan@gmail.com', 'abcd');
console.log(pavan2.email); // Output: 'PAVAN@GMAIL.COM'
console.log(pavan2.password); // Output: abcdnewPassword

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// Another way of defining getter and setter

const User3 = {
    _email: 'pavan@gmail.com',
    _password: 'abcd',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return `${this._password}newPassword`;
    },

    set password(value){
        this._password = value;
    }
}

console.log(User3.email); // Output: 'PAVAN@GMAIL.COM'
console.log(User3.password); // Output: abcdnewPassword

// Interesting Fact:

// Here, we are using factory function to create an object.
// Hum yaha par keh rahe he hai ki kis object ke basis par hum naya object create karke du.
// If you use Object.create(), by default it is null.

// We are saying ke User3 ke basis par ek object create karo aur usko tea ke andar refer kar do.
const obj = Object.create(User3);
console.log(obj.email); // Output: 'PAVAN@GMAIL.COM'

// We don't have email property in obj. But, still we are able to access the email property.
// This is because, obj is created using Object.create(User3).