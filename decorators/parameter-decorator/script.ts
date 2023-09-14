interface IUserService10 {
  getUsersInDatabase(): number;
}

class UserService10 implements IUserService10 {
  private _users: number;

  // @Positive() - Decorator parameter
  setUsersInDatabase(@Positive() value: number): void {
    this._users = value;
  }

  getUsersInDatabase(): number {
    return this._users;
  }
}

function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(target); // Instance класса UserService10
    console.log(propertyKey); // setUsersInDatabase
    console.log(parameterIndex); // Индекс декорируемого параметра
  };
}

const userService10 = new UserService10();
