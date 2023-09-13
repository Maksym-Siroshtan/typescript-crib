"use strict";
/*
  Декоратор, который добавляет свойство createdAt в класс, фиксируя дату создания
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserService5 = class UserService5 {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
};
UserService5 = __decorate([
    CreatedAt
], UserService5);
function CreatedAt(constructor) {
    // Декоратор добавит новое свойство, но обратиться к нему, без каста типов, не получиться
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
// Класс жёстко закастуем к необходимым нам типам
const userService5 = new UserService5();
// Теперь у нас есть доступ к свойству createdAt
console.log("Дата и время создания: " + userService5.createdAt);
