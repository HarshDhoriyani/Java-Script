// Array in JS

const myarr = [0, 1, 2, 3, 4, 5]
const myheroes = ['tony stark', 'steve rogers', 'clark kent', 'bruce wayne']
const myarr2 = new Array(1, 2, 3, 4, 5)

// console.log(myarr[2]);

// Array Methods:
// myarr2.push(6)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);

// myarr.unshift(9)
// console.log(myarr);
// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(7));
// console.log(myarr.indexOf(9));

// console.log(myarr);


// const newarr = myarr2.join()

// console.log(myarr2);
// console.log(typeof newarr);
// console.log(newarr);

// Slice and splice

console.log("A ", myarr2);

const mynewarr1 = myarr2.slice(1,3)

console.log(mynewarr1);
console.log("B ", myarr2); // Slice me original array me koi changes nhi hogi aur slice me starting index include hota h aur ending index exclude hota h.

const mynewarr2 = myarr2.splice(1,3)

console.log(mynewarr2);
console.log("C ", myarr2); // Splice me original array me changes hoti h aur splice me starting index and ending index dono include hote h.



