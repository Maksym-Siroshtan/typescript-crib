"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService7 {
    constructor() {
        this.users = 1000;
    }
    // Декоратор @Catch() без входных параметров перехватывает ошибку, и выводит её в консоль
    // Декоратор @Catch({ rethrow: true }) ловит ошибку и выбрасывает её наружу
    getUsersInDatabase() {
        throw new Error("Что-то пошло не так...");
    }
}
__decorate([
    Catch()
    // Декоратор @Catch() без входных параметров перехватывает ошибку, и выводит её в консоль
    // Декоратор @Catch({ rethrow: true }) ловит ошибку и выбрасывает её наружу
], UserService7.prototype, "getUsersInDatabase", null);
function Catch({ rethrow } = { rethrow: false }) {
    return (target, _, descriptor) => {
        const oldMethod = descriptor.value; // Старое значение метода
        descriptor.value = (...args) => {
            // Переопределяем метод
            try {
                // Вызываем исходный метод который декорировали с контекстом target
                return oldMethod === null || oldMethod === void 0 ? void 0 : oldMethod.apply(target, args);
            }
            catch (error) {
                if (error instanceof Error) {
                    // Ловим ошибку и выводим сообщение об ошибке
                    console.log(error.message);
                    if (rethrow) {
                        // Если передано { rethrow: true } - перебрасываем ошибку
                        throw error;
                    }
                }
            }
        };
    };
}
console.log(new UserService7().getUsersInDatabase());
