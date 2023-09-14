interface IUserService8 {
  users: number;

  getUsersInDatabase(): number;
}

class UserService8 implements IUserService8 {
  @Max(100) // Декоратор свойства, максимальное число пользователей
  users: number;

  getUsersInDatabase(): number {
    throw new Error("Method not implemented.");
  }
}

function Max(max: number) {
  return (target: object, propertyKey: string | symbol) => {
    let value: number;

    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Введённое значение не может превышать ${max}`);
      } else {
        value = newValue;
      }
    };

    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      // Переопределим set и get для свойства propertyKey(users),
      // текущего инстанса(target)
      // set и get ТАКЖЕ работают ПРИ создании класса
      // и если у users будет дефолтное значение, например больше max
      // то уже на этапе создания мы получим ошибку
      set: setter,
      get: getter,
    });
  };
}

const userService8 = new UserService8();
userService8.users = 13; // Working...
console.log(userService8.users);
userService8.users = 101; // Error... Введённое значение не может превышать 100
