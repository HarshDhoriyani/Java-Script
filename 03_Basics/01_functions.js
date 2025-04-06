function sayMyName() {
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    
}

// sayMyName(); // calling the function

// function sum(num1, num2) { // parameters
//     return num1 + num2; // return statement to return the value of the sum
// }

function sum(num1, num2) {      // parameters
    let result = num1 + num2; 
    return result;   
}
// const result = sum(3, 8); // calling the function and printing the result (arguments)
// console.log("Result: ", result);


function loginUserMessage(username = "Harsh") { // default parameter
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Harsh"));
// console.log(loginUserMessage());


// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 2000));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(233, 134, 152, 692, 6828));


const user = {
    username: "Harsh",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); 
// handleObject({
//     username: "Sam",
//     price: 399
// })

const mynewArr = [200, 400, 2000, 103, 570]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(mynewArr)); 
console.log(returnSecondValue([200, 400, 2000,103, 570]));
