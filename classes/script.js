"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const userClass = new User("John");
console.log(userClass);
userClass.name = "Alex";
console.log(userClass);
