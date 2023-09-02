class User3 {
  _login: string;
  password: string;
  createdAt: Date;

  set login(l: string | number) {
    // Если явно не указан тип параметра, будет взят тип возвращаемого значения из get
    // Если set отсутствует _login доступен только для чтения!!!
    if (typeof l === "number") {
      this._login = `user-${l.toString()}`;
    } else {
      this._login = `user-${l}`;
    }
    this.createdAt = new Date();
  }

  get login() {
    return this._login;
  }

  // async set password(p: string) {} Error... Модификатор "async" не может использоваться здесь.

  // set password(p: string) {
  //   // sync будет работать синхронный код, но не АСИНХРОННЫЙ. Поэтому для получения асинхронного значения необходимо        использовать методы
  // }

  // async setPassword(p: string) {} Working...
}
const user3 = new User3();
// user3.login = "1";
user3.login = 1;
console.log(user3);
