// Want to change the value of PI to 4. Is it Possible? If yes then how and if no then why? --> Interview Question

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: "masala chai",
    score: 200,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai Nahi bani");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);  // name property will not print as we have enumerable as false.
    }
}