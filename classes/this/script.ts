class Payment4 {
  // this в момент вызова getDate Payment4
  private date: Date = new Date();

  getDate(): Date {
    return this.date;
  }
}

const payment4 = new Payment4();

const user4 = {
  // this в момент вызова getDate user4
  id: 1,
  paymentDate: payment4.getDate,
};

console.log("Результат получения на экземпляре класса: ", payment4.getDate()); // Working...
console.log(
  "Результат получения на объекте юзер. Контекст потерян: ",
  user4.paymentDate()
); // Undefined - контекст потерян, но TS не подсказывает

// Исправляем поведение this
class Payment5 {
  private date: Date = new Date();

  getDate(this: Payment5): Date {
    // Решение 1.1) Явно указали что this для метода будет Payment, теперь TS подскажет, как потеряем контекст
    return this.date;
  }
  getDateArrow = (): Date => {
    // Решение 2 Стрелочная функция, т.к. она не создаёт дополнительный контекст
    return this.date;
  };
}

const payment5 = new Payment5();

const user5 = {
  id: 1,
  paymentDate: payment5.getDate.bind(payment5), // Решение 1.2) После потери, забиндили нужный нам контекст
  paymentDateArrow: payment5.getDateArrow, // Решение 2 Стрелочная функция
};

console.log("Результат решения 1 - bind: ", user5.paymentDate()); // Working...
console.log("Результат решения 2 - arrow function: ", user5.paymentDateArrow()); // Working...

// Контекст при наследовании классов
class PaymentPersistent extends Payment5 {
  save(): Date {
    // return super.getDate(); // Working... Обычную функцию получаем через super
    // return super.getDateArrow(); // Error... TypeError: (intermediate value).getDateArrow is not a function. Т.к. стрелочной функции нет в прототипе объекта super. Поэтому необходимо обращаться с помощью this.getDateArrow()
    return this.getDateArrow(); // Working... Стрелочную функцию получаем через this
  }
}

const paymentPersistent = new PaymentPersistent();
console.log(
  "Результат получения на наследуемом экземпляре класса: ",
  paymentPersistent.save()
);
