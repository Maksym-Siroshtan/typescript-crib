interface IUserService6 {
  users: number;

  getUsersInDatabase();
}

class UserService6 implements IUserService6 {
  users: number;

  // @Log // Дескриптор метода
  @Log() // Factory decorator
  getUsersInDatabase() {
    throw new Error("Error");
  }
}

// function Log(
//   target: object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
//   console.log("Текущий инстанс", target);
//   console.log("Название метода", propertyKey);
//   console.log("Дескриптор метода", descriptor);
//   const oldValue = descriptor.value;
//   console.log("Старое значение метода Error", oldValue);
//   descriptor.value = () => {
//     console.log("Метод изменён! no Error");
//   };
// }

function Log() {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log("Текущий инстанс", target);
    console.log("Название метода", propertyKey);
    console.log("Дескриптор метода", descriptor);
    const oldValue = descriptor.value;
    console.log("Старое значение метода Error", oldValue);
    descriptor.value = () => {
      console.log("Метод изменён! no Error");
    };
  };
}

console.log(new UserService6().getUsersInDatabase());
