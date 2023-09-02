type Payment2Status = "new" | "paid";

class Payment2 {
  id: number;
  status: Payment2Status = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment2 {
  // Расширяем класс дополнительными свойствами
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id); // Если переопределяем конструктор обязателен метод супер
  }

  save() {
    // Сохранение платежа в базу данных
  }

  override pay(date?: Date) {
    // override - означает что метод pay() переопределён
    super.pay(); // Получаем метод pay() из наследуемого класса и дополняем его
    if (date) {
      this.paidAt = date;
    }
  }
}
