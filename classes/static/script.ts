class UserService {
  // static name: string; Статическое свойство "name" конфликтует со встроенным свойством "Function.name" функции-конструктора "UserService".

  // static db: any; // public - можно получить вне класса
  private static db: any; // error при попытке получить вне класса

  static getUserById(id: number) {
    // Статический метод может быть асинхронным
    // this.db.filter(id) // this - это экземпляр класса
    return UserService.db.filter(id); // Правильно будет обращаться к UserService
  }

  constructor(id: number) {
    // Конструктор есть только на instance класса
  }

  create() {
    // Динамический метод который будет доступен только на экземпляре класса, а не на самом классе
    UserService.db; // Working... В динамическом методе экземпляра класса можно обратиться к статичному свойству самого класса
  }

  static {
    // Блок инициализируется при создании класса и может что-то делать
    // await UserService.db = "database"; Выражение Await нельзя использовать внутри статического блока класса.
    UserService.db = "database";
  }
}

UserService; // Свойство db можно получить только на самом классе при условии что оно public
const instance = new UserService(1); // На инстансе нет доступа к db
instance.create(); // Working...
// UserService.create() Свойство "create" не существует в типе "typeof UserService"
