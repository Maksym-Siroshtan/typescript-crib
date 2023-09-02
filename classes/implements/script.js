"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            // Тут какие-то действия, например выбросить ошибку во внешнюю систему
            console.log(...args);
        });
    }
}
class User4 {
    // Пользователь должен обладать всеми свойствами и методами которые реализует тот или иной interface
    // pay(paymentId: string): void {
    //   // Ошибка, т.к в interface тип number
    // }
    // pay(paymentId: number | string): void {
    //   // Типы могут быть шире чем в IPayable, но обязательно должен быть тот тип который задан в IPayable
    //   // Тут происходит платёж
    // }
    // pay(paymentId): void {
    //   // Без явного указания будет указан тип any
    // }
    pay(paymentId) {
        // // Тут происходит платёж
    }
    delete() {
        // Тут происходит удаление
    }
}
