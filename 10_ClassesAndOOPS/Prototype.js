// let myName = "harsh     "

// console.log(myName.trueLength);  // We want to create a method.


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.harsh = function(){
    console.log("Harsh is present in all objects");
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says Hello`);
}

// heroPower.harsh()
// myHeros.harsh()

// myHeros.heyHarsh()
// heroPower.heyHarsh()  // Object doesn't have power of heyHarsh function


// Inheritance: Prototypal Inheritance

const User = {
    name: "Harsh",
    email: "harshdhoriyani@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "Harsh Dhoriyani      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
    
}

// anotherUsername.trueLength();
// "harsh".trueLength();
// "Hey buddy   ".trueLength();