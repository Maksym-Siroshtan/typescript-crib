"use strict";
class UserService {
    static getUserById(id) {
        // Статический метод может быть асинхронным
        // this.db.filter(id) // this - это экземпляр класса
        return UserService.db.filter(id); // Правильно будет обращаться к UserService
    }
    constructor(id) {
        // Конструктор есть только на instance класса
    }
    create() {
        // Динамический метод который будет доступен только на экземпляре класса, а не на самом классе
        UserService.db; // Working... В динамическом методе экземпляра класса можно обратиться к статичному свойству самого класса
    }
}
(() => {
    // Блок инициализируется при создании класса и может что-то делать
    // await UserService.db = "database"; Выражение Await нельзя использовать внутри статического блока класса.
    UserService.db = "database";
})();
UserService; // Свойство db можно получить только на самом классе при условии что оно public
const instance = new UserService(1); // На инстансе нет доступа к db
instance.create(); // Working...
// UserService.create() Свойство "create" не существует в типе "typeof UserService"
