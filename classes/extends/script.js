"use strict";
class Payment2 {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class PersistedPayment extends Payment2 {
    constructor() {
        const id = Math.random();
        super(id); // Если переопределяем конструктор обязателен метод супер
    }
    save() {
        // Сохранение платежа в базу данных
    }
    pay(date) {
        // override - означает что метод pay() переопределён
        super.pay(); // Получаем метод pay() из наследуемого класса и дополняем его
        if (date) {
            this.paidAt = date;
        }
    }
}
