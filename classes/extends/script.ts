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
    const id = Math.random(); // Работает, потому что нет инициализации свойств, аргументов и не обращаемся к this. В других случаях super() всегда на первой строке в constructor()
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

// Особенности наследования
class User5 {
  name: string = "user";

  constructor() {
    console.log(this.name);
  }
}

// class Admin5 extends User5 {
//   name: string = "admin";

//   constructor() {
// Error!!! Вызов "super" должен быть первой инструкцией в конструкторе, ссылающейся на "super" или "this", если производный класс содержит инициализированные свойства, свойства параметров или частные идентификаторы.
//     console.log(this.name);
//     super();
//   }
// }

// class Admin5 extends User5 {
//   name: string; // Уберём инициализацию свойства и получим другую ошибку

//   constructor() {
//     console.log(this.name); //Error!!! super следует вызывать перед получением доступа к this в конструкторе производного класса.
//     super();
//   }
// }

// class Admin5 extends User5 {
//   name: string;

//   constructor() {
//     console.log("this.name"); // Теперь всё работает, потому что нет инициализации свойства, аргументов и не обращаемся к this
//     super();
//   }
// }

class Admin5 extends User5 {
  name: string;

  constructor() {
    super();
    console.log(this.name); // Всё корректно, потому что super() на первой строке constructor()
  }
}

// new Error('') Наследуем от встроенного класса
class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
