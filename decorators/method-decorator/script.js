"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService6 {
    // @Log // Дескриптор метода
    getUsersInDatabase() {
        throw new Error("Error");
    }
}
__decorate([
    Log() // Factory decorator
], UserService6.prototype, "getUsersInDatabase", null);
// function Log(
//   target: object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
//   console.log("Текущий инстанс", target);
//   console.log("Название метода", propertyKey);
//   console.log("Дескриптор метода", descriptor);
//   const oldValue = descriptor.value;
//   console.log("Старое значение метода Error", oldValue);
//   descriptor.value = () => {
//     console.log("Метод изменён! no Error");
//   };
// }
function Log() {
    return (target, propertyKey, descriptor) => {
        console.log("Текущий инстанс", target);
        console.log("Название метода", propertyKey);
        console.log("Дескриптор метода", descriptor);
        const oldValue = descriptor.value;
        console.log("Старое значение метода Error", oldValue);
        descriptor.value = () => {
            console.log("Метод изменён! no Error");
        };
    };
}
console.log(new UserService6().getUsersInDatabase());
