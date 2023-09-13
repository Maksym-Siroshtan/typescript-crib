interface IUserService7 {
  users: number;

  getUsersInDatabase(): number;
}

class UserService7 implements IUserService7 {
  users: number = 1000;

  @Catch()
  // Декоратор @Catch() без входных параметров перехватывает ошибку, и выводит её в консоль
  // Декоратор @Catch({ rethrow: true }) ловит ошибку и выбрасывает её наружу
  getUsersInDatabase(): number {
    throw new Error("Что-то пошло не так...");
  }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
  return (
    target: object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const oldMethod = descriptor.value; // Старое значение метода
    descriptor.value = (...args: any[]) => {
      // Переопределяем метод
      try {
        // Вызываем исходный метод который декорировали с контекстом target
        return oldMethod?.apply(target, args);
      } catch (error) {
        if (error instanceof Error) {
          // Ловим ошибку и выводим сообщение об ошибке
          console.log(error.message);
          if (rethrow) {
            // Если передано { rethrow: true } - перебрасываем ошибку
            throw error;
          }
        }
      }
    };
  };
}

console.log(new UserService7().getUsersInDatabase());
