interface IUserService3 {
  users: number;
  getUsersInDatabase(): number;
}

@nullUsers3 // Decorator
@threeUsers3 // Decorator
class UserService3 implements IUserService3 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUsers3(target: Function) {
  // Это валидный декоратор, но его проблема в том, что мы можем записать свойство только через prototype
  // Вторая проблема в том, что сначала выполниться decorator nullUsers3
  // target.prototype.users = 0 будет задано в начале выполнения программы,
  // а уже после выполнения декоратора будет создан экземпляр класса который при наличии дефолтного значения свойства
  // ИЗМЕНИТ, значение свойства(в данном случае users будет присвоено 1000)
  target.prototype.users = 0;
}

function threeUsers3<T extends { new (...args: any[]): {} }>(constructor: T) {
  // Теперь всё работает корректно, т.к. мы сначала создаём экземпляр класса,
  // наследуемся от него анонимным классом, а потом изменяем значение свойства user
  return class extends constructor {
    users = 3;
  };
}

console.log(new UserService3().getUsersInDatabase()); // 3
