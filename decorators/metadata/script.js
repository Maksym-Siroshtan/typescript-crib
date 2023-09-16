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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");
class UserService11 {
    // Decorator @Validate() для method, валидирует переданное value на положительное значение
    setUsersInDatabase(value) {
        // @Positive() - Decorator parameter
        this._users = value; // 10
    }
    getUsersInDatabase() {
        return this._users;
    }
}
__decorate([
    Validate(),
    __param(0, Positive11()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService11.prototype, "setUsersInDatabase", null);
function Positive11() {
    // Получаем метаданные нашего метода "design:type", "design:paramtypes", "design:returntype"
    // Дополняем метаданные своими по ключу POSITIVE_METADATA_KEY
    return (target, propertyKey, parameterIndex) => {
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey)); // [Function: Function]
        console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey)); // [ [Function: Number] ]
        console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey)); // undefined, т.к. метод ничего не возвращает
        let existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        // Получаем имеющиеся значения по ключу POSITIVE_METADATA_KEY или []
        // console.log(existParams); // [ ]
        existParams.push(parameterIndex);
        // console.log(existParams); // [ 0 ]
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    };
}
function Validate() {
    // Валидируем число на положительное значение
    return (target, propertyKey, descriptor) => {
        let method = descriptor.value; // Получаем метод setUsersInDatabase
        descriptor.value = (...args) => {
            // Переопределяем метод setUsersInDatabase
            let positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if (positiveParams) {
                // positiveParams = [ 0 ]
                for (let index of positiveParams) {
                    // Первый вызов: [ 10 ][ 0 ] -> 10
                    if (args[index] < 0) {
                        // Второй вызов: [ -1 ][ 0 ] -> -1
                        throw new Error("Число должно быть больше нуля");
                    }
                }
            }
            return method === null || method === void 0 ? void 0 : method.apply(target, args); // args = 10
        };
    };
}
const userService11 = new UserService11();
console.log(userService11.setUsersInDatabase(10));
// console.log(userService11.setUsersInDatabase(-1)); Error Число должно быть больше нуля
console.log(userService11.getUsersInDatabase()); // 10
