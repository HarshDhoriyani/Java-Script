// Immediately Invoked Function Expression (IIFE)
// Need for IIFE : To avoid pollution of global scope

// Named IIFE
(function showMessage() {
  console.log("Hello, World!");
})(); // This function runs immediately after it's defined


// Parameter IIFE
( (name) => {
    console.log(`My name is ${name}`);  
} )("Harsh Dhoriyani");