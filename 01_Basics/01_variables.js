const accountId = 13245    // this const variables are fixed. they can't be changed or altered once they are assigned.

let accountEmail = "abc@gmail.com"   
var accountPass = "12345"
accountCity = "Pune"
let accountState;

accountEmail = "harsh@124.gmail.com"
accountPass = "124"
accountCity = "Bhopal"

// prefer not to use "var" because of issue in block scoper and functional scope

console.table([accountId, accountEmail, accountPass, accountCity, accountState])   // this will make the table with index and their values.

