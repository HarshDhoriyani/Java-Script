// Old style for getter and setters with the help of functions in JavaScript  --> Function based getters setters

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        },
        set: function(value) {
            this._password = value
        }
    })
}

const harsh = new User("harsh!@gmail.com", "hash12")
console.log(harsh.email);
console.log(harsh.password);
