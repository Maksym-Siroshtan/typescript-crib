/*
  Декоратор, который добавляет свойство createdAt в класс, фиксируя дату создания
*/

interface IUserService5 {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserService5 implements IUserService5 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  // Декоратор добавит новое свойство, но обратиться к нему, без каста типов, не получиться
  return class extends constructor {
    createdAt = new Date();
  };
}

// Для решения проблемы создадим дополнительный тип, для нового свойства
type CreatedAt = {
  createdAt: Date;
};

// Класс жёстко закастуем к необходимым нам типам
const userService5 = new UserService5() as IUserService5 & CreatedAt;

// Теперь у нас есть доступ к свойству createdAt
console.log("Дата и время создания: " + userService5.createdAt);
