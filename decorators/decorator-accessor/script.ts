interface IUserService9 {
  getUsersInDatabase(): number;
}

class UserService9 implements IUserService9 {
  private _users: number;

  @Log9()
  // Декоратор accessor @Log будет работать как для set, так и для get.
  // НО! не для обоих одновременно
  set users(value: number) {
    this._users = value;
  }

  get users() {
    return this._users;
  }

  getUsersInDatabase(): number {
    throw new Error("Method not implemented.");
  }
}

function Log9() {
  return (
    target: Object,
    _: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const set = descriptor.set; // Получили исконный сеттер
    descriptor.set = (...args: any) => {
      // Переопределили сеттер на новый
      console.log("Step 1", args); // 'Step 1' Добавили логику в переопределённый сеттер. Результат вывода: [ 13 ]
      set?.apply(target, args); // 'Step 2' Вызвали исконный сеттер, который добавит userService9.users = 13;
    };
  };
}

const userService9 = new UserService9();
console.log("Step 2", (userService9.users = 13)); // Working...
