interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    // Тут какие-то действия, например выбросить ошибку во внешнюю систему
    console.log(...args);
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number; // Можно использовать, можно нет
}

interface IDeletable {
  delete(): void;
}

class User4 implements IPayable, IDeletable {
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

  pay(paymentId: number): void {
    // // Тут происходит платёж
  }

  delete(): void {
    // Тут происходит удаление
  }
}
