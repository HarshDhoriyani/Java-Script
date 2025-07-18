// Old style of getters and setters using object in Javascript -->> Object Based getters and setters

const User = {
    _email: "harsh@gamul.com",
    _password: "harsdf12334v",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);


