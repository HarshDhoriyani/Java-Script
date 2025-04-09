// var c = 300 // global scope
let a = 300

if (true) {
    let a = 10 // block scope
    const b = 20 // block scope
    // var c = 30
    // console.log(a); // 10
    
}


// console.log(a); 
// console.log(b); 
// console.log(c); // 30

function one() {
    const username = "Harsh"

    function two() {
        const website = "google"
        console.log(username);
        
    }
    // console.log(website); // ReferenceError: website is not defined
    two()

}
// one()

if (true) {
    const username = "harsh"
    if (username === "harsh") {
        const website = " google"
        // console.log(username + website); // harsh google
    }
}


// Interesting Question/Concept : Difference between two different function declarations.
console.log(addOne(5)) // 6

function addOne(num) {
    return num + 1
}


addTwo(5) // Cannot access addTwo before initialization

const addTwo = function(num) {
    return num + 2
}
