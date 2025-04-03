// singleton
// Object.create

const mysym = Symbol("sym");

// object literals
const JsUser = {
    name: "Harsh",
    "full name": "Harsh Dhoriyani",
    [mysym]: "mysym",     // Using symbol as a key in an object Correct Syntax is by adding the square bracket for the symbols -- Interview Question
    age: 20,
    location: "Pune",
    email: "harsh@gmail.com",
    isloggedin: false,
    days: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]); // prints mysym
// console.log(typeof JsUser.mysym); // Symbol's type is "undefined"

// JsUser.email = "harshdhoriyani@gmail.com"; // updating the value of email
// Object.freeze(JsUser) // after this line of code, will not change the value of the object
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

console.log(JsUser.greeting()); // Hello Js User
console.log(JsUser.greeting);  // Function(anonymous function) is also an object in JS
