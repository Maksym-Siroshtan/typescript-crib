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
class UserService10 {
    // @Positive() - Decorator parameter
    setUsersInDatabase(value) {
        this._users = value;
    }
    getUsersInDatabase() {
        return this._users;
    }
}
__decorate([
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService10.prototype, "setUsersInDatabase", null);
function Positive() {
    return (target, propertyKey, parameterIndex) => {
        console.log(target); // Instance класса UserService10
        console.log(propertyKey); // setUsersInDatabase
        console.log(parameterIndex); // Индекс декорируемого параметра
    };
}
const userService10 = new UserService10();
