"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Uni(name) {
    // В name передаём то, что декорируем
    console.log(`Инициализация: ${name}`);
    return function () {
        // Возвращаем функцию которая декорирует
        console.log(`Вызов: ${name}`);
    };
}
let MyClass = class MyClass {
    // После ОБЫЧНОГО method(не static), будет вызван static method
    // Не зависимо от порядка
    static method2(_) { }
    // Вначале будет вызван ОБЫЧНЫЙ method(не static)
    // Не зависимо от порядка
    method(_) { }
    constructor(_) { }
};
__decorate([
    Uni("Свойство 3") // 1
    // Вначале будет вызван ОБЫЧНЫЙ props(не static)
    // Не зависимо от порядка
], MyClass.prototype, "props3", void 0);
__decorate([
    Uni("Свойство 1") // 2
    // На одном уровне вызова, таком, как Свойство 3 и Свойство 1 будет вызвано согласно порядку написания
], MyClass.prototype, "props", void 0);
__decorate([
    Uni("Метод")
    // Вначале будет вызван ОБЫЧНЫЙ method(не static)
    // Не зависимо от порядка
    ,
    __param(0, Uni("Параметр метода"))
], MyClass.prototype, "method", null);
__decorate([
    Uni("Свойство static")
    // После ОБЫЧНОГО props(не static), будет вызван static props
    // Не зависимо от порядка
], MyClass, "props2", void 0);
__decorate([
    Uni("Метод static")
    // После ОБЫЧНОГО method(не static), будет вызван static method
    // Не зависимо от порядка
    ,
    __param(0, Uni("Параметр метода static"))
], MyClass, "method2", null);
MyClass = __decorate([
    Uni("Класс"),
    __param(0, Uni("Параметр конструктора"))
], MyClass);
// Порядок вызова декораторов представлен в файле order.txt
