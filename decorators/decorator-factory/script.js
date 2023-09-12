"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// При инициализации порядок вызова декораторов будет такой:
let UserService4 = class UserService4 {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
};
UserService4 = __decorate([
    setUsers4(2) // 1) @setUsers4(2)
    ,
    logUsers4() // 2) @logUsers4()
    // НО, при выполнении декораторов их очерёдность вызова будет в ОБРАТНОМ порядке. Последовательность вызова ВАЖНА.
    ,
    setUsersAdvanced(4)
], UserService4);
function setUsers4(users) {
    // Фабрика декораторов
    console.log("setUsers init"); // 1
    return (target) => {
        console.log("setUsers run"); // 4
        target.prototype.users = users;
    };
}
function logUsers4() {
    console.log("log init"); // 2
    return (target) => {
        console.log("log run"); // 3
        console.log(target);
    };
}
function setUsersAdvanced(users) {
    // Фабрика декораторов
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
console.log(new UserService4().getUsersInDatabase());
