abstract class Controller {
  // class Controller ведёт себя как шаблон для классов наследников
  // Если есть хоть одно абстрактное свойство или метод, то класс должен быть абстрактным
  abstract handle(req: string): void;

  handleWithLogs(req: string): void {
    console.log("Start");
    this.handle(req); // Можно обратиться к абстрактному классу
    console.log("End");
  }
}

// new Controller - Error! Невозможно создать экземпляр абстрактного класса.

class UserController extends Controller {
  // Наследующий класс должен реализовать все абстрактные свойства и методы абстрактного класса
  handle(req: string): void {
    console.log(req);
  }
}

const userController = new UserController(); // Working... Наследующие классы могут инстанциироваться
userController.handleWithLogs("Request");
