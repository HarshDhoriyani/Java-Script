const tinderUser = new Object(); // Singelton object
// const tinderUser2 = {} // Object literal

tinderUser.name = "John Doe";
tinderUser.id = "124habc";
tinderUser.isActive = true;

// console.log(tinderUser);

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Harsh",
      lastname: "Dhoriyani",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = {  5: "a", 6: "b" };

// const obj3 = Object.assign({}, obj1, obj2, obj4); // method to combine two or more objects.

const obj3 = { ...obj1, ...obj2, ...obj4 }; // Spread operator to combine two or more objects.
// console.log(obj3);

const users = [
  {
    id : 1,
    email: "harsh@gmail.com"
  },
  {
    id : 2,
    email: "raj@gmail.com"
  },
  {
    id : 1,
    email: "harsh@gmail.com"
  },
  {
    id : 1,
    email: "harsh@gmail.com"
  }
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // method to get keys of object
// console.log(Object.values(tinderUser)); // method to get values of object
// console.log(Object.entries(tinderUser)); // method to get entries of object

// console.log(tinderUser.hasOwnProperty("age")); // method to check if object has property


// DESTRUCTURING OBJECTS
const course = {
  courseName: "Javascript",
  courseDuration: 3,
  coursePrice: 999,
  courseInstructor: "Harsh"
}

course.courseInstructor // method to get property of object

const {courseInstructor} = course;
console.log(courseInstructor); // method to get property of object using destructuring

const {courseInstructor: instructor} = course;
console.log(instructor); // method to get property of object using destructuring and renaming the variable

const {courseName, courseDuration} = course; // method to get multiple properties of object using destructuring
console.log(courseName, courseDuration); // method to get multiple properties of object using destructuring


// JSON type format: Javascript Object Notation
// {
//   "name": "Harsh",
//   "coursename": "Javascript",
//   "price": "free"
// }

