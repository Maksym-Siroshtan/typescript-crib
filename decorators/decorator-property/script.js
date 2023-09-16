"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class UserService8 {
    getUsersInDatabase() {
        throw new Error("Method not implemented.");
    }
}
__decorate([
    Max(100) // Декоратор свойства, максимальное число пользователей
    ,
    __metadata("design:type", Number)
], UserService8.prototype, "users", void 0);
function Max(max) {
    return (target, propertyKey) => {
        let value;
        const setter = function (newValue) {
            if (newValue > max) {
                console.log(`Введённое значение не может превышать ${max}`);
            }
            else {
                value = newValue;
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            // Переопределим set и get для свойства propertyKey(users),
            // текущего инстанса(target)
            // set и get ТАКЖЕ работают ПРИ создании класса
            // и если у users будет дефолтное значение, например больше max
            // то уже на этапе создания мы получим ошибку
            set: setter,
            get: getter,
        });
    };
}
const userService8 = new UserService8();
userService8.users = 13; // Working...
console.log(userService8.users);
userService8.users = 101; // Error... Введённое значение не может превышать 100
