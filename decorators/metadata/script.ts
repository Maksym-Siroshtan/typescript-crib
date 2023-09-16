import "reflect-metadata";

const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");

interface IUserService11 {
  getUsersInDatabase(): number;
}

class UserService11 implements IUserService11 {
  private _users: number;

  // Decorator @Validate() для method, валидирует переданное value на положительное значение
  @Validate()
  setUsersInDatabase(@Positive11() value: number): void {
    // @Positive() - Decorator parameter
    this._users = value; // 10
  }

  getUsersInDatabase(): number {
    return this._users;
  }
}

function Positive11() {
  // Получаем метаданные нашего метода "design:type", "design:paramtypes", "design:returntype"
  // Дополняем метаданные своими по ключу POSITIVE_METADATA_KEY
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(Reflect.getOwnMetadata("design:type", target, propertyKey)); // [Function: Function]

    console.log(
      Reflect.getOwnMetadata("design:paramtypes", target, propertyKey)
    ); // [ [Function: Number] ]

    console.log(
      Reflect.getOwnMetadata("design:returntype", target, propertyKey)
    ); // undefined, т.к. метод ничего не возвращает

    let existParams: number[] =
      Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    // Получаем имеющиеся значения по ключу POSITIVE_METADATA_KEY или []

    // console.log(existParams); // [ ]
    existParams.push(parameterIndex);
    // console.log(existParams); // [ 0 ]

    Reflect.defineMetadata(
      POSITIVE_METADATA_KEY,
      existParams,
      target,
      propertyKey
    );
  };
}

function Validate() {
  // Валидируем число на положительное значение
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    let method = descriptor.value; // Получаем метод setUsersInDatabase

    descriptor.value = (...args: any) => {
      // Переопределяем метод setUsersInDatabase
      let positiveParams: number[] = Reflect.getOwnMetadata(
        POSITIVE_METADATA_KEY,
        target,
        propertyKey
      );

      if (positiveParams) {
        // positiveParams = [ 0 ]
        for (let index of positiveParams) {
          // Первый вызов: [ 10 ][ 0 ] -> 10
          if (args[index] < 0) {
            // Второй вызов: [ -1 ][ 0 ] -> -1
            throw new Error("Число должно быть больше нуля");
          }
        }
      }
      return method?.apply(target, args); // args = 10
    };
  };
}

const userService11 = new UserService11();
console.log(userService11.setUsersInDatabase(10));
// console.log(userService11.setUsersInDatabase(-1)); Error Число должно быть больше нуля
console.log(userService11.getUsersInDatabase()); // 10
