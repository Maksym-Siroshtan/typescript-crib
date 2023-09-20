interface IPaymentAPI {
  getPaymentDetail(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

class PaymentAPI implements IPaymentAPI {
  private data = [{ id: 1, sum: 20000 }];
  getPaymentDetail(id: number): IPaymentDetail | undefined {
    return this.data.find((a) => a.id === id);
  }
}

class PaymentAccessProxy implements IPaymentAPI {
  // Прокси, дополнительная логика, которая отработает в методе getPaymentDetail()
  // Метод getPaymentDetail() вернёт детали платежа только для первого пользователя
  constructor(private api: PaymentAPI, private userId: number) {}
  getPaymentDetail(id: number): IPaymentDetail | undefined {
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
