"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 20000 }];
    }
    getPaymentDetail(id) {
        return this.data.find((a) => a.id === id);
    }
}
class PaymentAccessProxy {
    // Прокси, дополнительная логика, которая отработает в методе getPaymentDetail()
    // Метод getPaymentDetail() вернёт детали платежа только для первого пользователя
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetail(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log("Попытка получить детали платежа");
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1)); // { id: 1, sum: 20000 }
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(1)); // Попытка получить детали платежа undefined
