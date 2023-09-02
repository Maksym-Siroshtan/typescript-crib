"use strict";
class User3 {
    set login(l) {
        // Если явно не указан тип параметра, будет взят тип возвращаемого значения из get
        // Если set отсутствует _login доступен только для чтения!!!
        if (typeof l === "number") {
            this._login = `user-${l.toString()}`;
        }
        else {
            this._login = `user-${l}`;
        }
        this.createdAt = new Date();
    }
    get login() {
        return this._login;
    }
}
const user3 = new User3();
// user3.login = "1";
user3.login = 1;
console.log(user3);
