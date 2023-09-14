"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService9 {
    set users(value) {
        this._users = value;
    }
    get users() {
        return this._users;
    }
    getUsersInDatabase() {
        throw new Error("Method not implemented.");
    }
}
__decorate([
    Log9()
    // Декоратор accessor @Log будет работать как для set, так и для get.
    // НО! не для обоих одновременно
], UserService9.prototype, "users", null);
function Log9() {
    return (target, _, descriptor) => {
        const set = descriptor.set; // Получили исконный сеттер
        descriptor.set = (...args) => {
            // Переопределили сеттер на новый
            console.log("Step 1", args); // 'Step 1' Добавили логику в переопределённый сеттер. Результат вывода: [ 13 ]
            set === null || set === void 0 ? void 0 : set.apply(target, args); // 'Step 2' Вызвали исконный сеттер, который добавит userService9.users = 13;
        };
    };
}
const userService9 = new UserService9();
console.log("Step 2", (userService9.users = 13)); // Working...
