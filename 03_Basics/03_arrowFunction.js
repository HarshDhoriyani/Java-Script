const user = {
    username: "Harsh",
    age: 20,
    
    greet: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.greet(); 
// user.username = "John";
// user.greet();
// Global Object of Browser is window (Interview Ques)

// console.log(this);

// function chai() {
//     let username = "Harsh";
//     console.log(this.username); // undefined
    
// }
// chai()


// Arrow Function :
const chai = () => {
    let username = "Harsh";
    // console.log(this); // undefined
}

chai()

// Implicit Arrow Function:
const addTwo = (a, b) => a + b; // Implicit Return (Mainly used in React)
console.log(addTwo(2, 3)); // 5

