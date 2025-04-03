const marvel_heroes = ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America"];
const dc_heroes = ["superman", "flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(dc_heroes);

const allheros = marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);
// console.log(allheros);

const allnewheros = [...marvel_heroes, ...dc_heroes];
// console.log(allnewheros);

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realarr = anotherarr.flat(Infinity);
// console.log(realarr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "Harsh"})); // interesting as it will give empty array as it is not iterable because it is an dictionary.


let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
