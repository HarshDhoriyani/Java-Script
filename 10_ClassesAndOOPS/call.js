function SetUserName(username) {
    // complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password) {
    // SetUserName(username) // call nhi gaya sirf reference gaya hai

    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const harsh = new createUser("Harsh", "harshdhoriyani@gmail.com", "ABNC12yg@!")
console.log(harsh);
