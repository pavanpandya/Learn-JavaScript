function setUsername(username){
    this.username = username;
    console.log("Called setUsername function");
}

function createUser(username, email, password){
    // setUsername(username); // setUsername is called as a standalone function
    // setUsername.call(username) // Still not working. Why? Because the context is not set.
    setUsername.call(this, username); // Now it works. The context is set to the current object.
    this.email = email;
    this.password = password;
}

const python = new createUser('python', 'p@py.com', '1234');
console.log(python);
// Output: createUser { email: 'p@py.com', password: '1234' }

// Why is the username not set?
// The reason is that the setUsername function is called without a context.
// The context is lost when the function is called as a standalone function.
// To fix this, we can use the "call" method to set the context of the setUsername function.

