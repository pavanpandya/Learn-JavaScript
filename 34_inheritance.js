class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, subject){
        // We can also use "call" method to call the constructor of the parent class and pass the context of the child class.
        // But, we have a better way to do this using "super" keyword.
        // super() is used to call the constructor of the parent class
        super(username);
        this.subject = subject;
    }

    addCourse(){
        console.log(`${this.username} is teaching ${this.subject}`);
    }
}

let teacher = new Teacher("Pavan", "JavaScript");
console.log(teacher);
// Output: Teacher { username: 'Pavan', subject: 'JavaScript' }

teacher.logMe();
// Output: Username: Pavan

teacher.addCourse();
// Output: Pavan is teaching JavaScript

// Let's check few other things:
let user = new User("Pavan");

user.logMe();
// Output: Username: Pavan

// user.addCourse();
// Output: TypeError: user.addCourse is not a function

// We can see that the child class can access the methods of the parent class but the parent class cannot access the methods of the child class.

console.log(user === teacher);
// Output: false

console.log(user instanceof User);
// Output: true

console.log(teacher instanceof User);
// Output: true

console.log(user instanceof User);  
// Output: true

// We can also override the methods of the parent class in the child class.

class Teacher2 extends User{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }

    logMe(){
        console.log(`Username: ${this.username} and Subject: ${this.subject}`);
    }
}

let teacher2 = new Teacher2("Pavan", "JavaScript");
teacher2.logMe();
// Output: Username: Pavan and Subject: JavaScript