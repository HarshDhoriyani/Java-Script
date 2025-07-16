const user = {
    username: "Harsh",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  
    }
}

// console.log(user['username']);
// // or
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// new is a constructor function that is called implicitly.
const userOne = new User("harsh", 10, true)
const userTwo = new User("Raj", 5, false)
console.log(userOne.constructor);
console.log(userTwo);


