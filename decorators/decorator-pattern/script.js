"use strict";
class UserService2 {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
}
// В данном случае декоратор это функция которая модифицирует наш объект
function nullUsers(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserService2().getUsersInDatabase()); // 1000
console.log(nullUsers(new UserService2()).getUsersInDatabase()); // 0
console.log(logUsers(nullUsers(new UserService2())).getUsersInDatabase()); // Users: 0   0
