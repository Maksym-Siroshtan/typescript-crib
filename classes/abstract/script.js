"use strict";
class Controller {
    handleWithLogs(req) {
        console.log("Start");
        this.handle(req); // Можно обратиться к абстрактному классу
        console.log("End");
    }
}
// new Controller - Error! Невозможно создать экземпляр абстрактного класса.
class UserController extends Controller {
    // Наследующий класс должен реализовать все абстрактные свойства и методы абстрактного класса
    handle(req) {
        console.log(req);
    }
}
const userController = new UserController(); // Working... Наследующие классы могут инстанциироваться
userController.handleWithLogs("Request");
