// console.log("2" > 1);
// console.log("02" < 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Avoid the above types of comparisons in which we are not sure that what the output will be.
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why at line 6 null >= 0 is true and at line 4 null > 0 is false.


