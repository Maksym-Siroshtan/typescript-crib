"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserService3 = class UserService3 {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
};
UserService3 = __decorate([
    nullUsers3 // Decorator
    ,
    threeUsers3 // Decorator
], UserService3);
function nullUsers3(target) {
    // Это валидный декоратор, но его проблема в том, что мы можем записать свойство только через prototype
    // Вторая проблема в том, что сначала выполниться decorator nullUsers3
    // target.prototype.users = 0 будет задано в начале выполнения программы,
    // а уже после выполнения декоратора будет создан экземпляр класса который при наличии дефолтного значения свойства
    // ИЗМЕНИТ, значение свойства(в данном случае users будет присвоено 1000)
    target.prototype.users = 0;
}
function threeUsers3(constructor) {
    // Теперь всё работает корректно, т.к. мы сначала создаём экземпляр класса,
    // наследуемся от него анонимным классом, а потом изменяем значение свойства user
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
console.log(new UserService3().getUsersInDatabase()); // 3
