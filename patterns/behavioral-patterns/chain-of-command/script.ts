interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;
  handle(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: any;

  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid;
    return mid;
  }

  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }
    return;
  }
}

class AuthMiddleware extends AbstractMiddleware {
  // Только авторизация, можно использовать как отдельно, так и с ValidateMiddleware по цепочке
  override handle(request: any) {
    console.log("AuthMiddleware");
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { error: "Вы не авторизованы" };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  // Только валидация, можно использовать как отдельно, так и с AuthMiddleware по цепочке
  override handle(request: any) {
    console.log("ValidateMiddleware");
    if (request.body) {
      return super.handle(request);
    }
    return { error: "Отсутствует body" };
  }
}

class ControllerMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log("ControllerMiddleware");
    return { success: request };
  }
}

const controllerMiddleware = new ControllerMiddleware();
const validateMiddleware = new ValidateMiddleware();
const authMiddleware = new AuthMiddleware();

authMiddleware.next(validateMiddleware).next(controllerMiddleware); // Определим цепочку вызовов

// console.log(authMiddleware.handle({})); AuthMiddleware - { error: 'Вы не авторизованы' }

// console.log(
//   authMiddleware.handle({
//     userId: 1,
//   })
// ); AuthMiddleware -> ValidateMiddleware { error: 'Отсутствует body' }

console.log(
  authMiddleware.handle({
    userId: 1,
    body: "I am OK!",
  })
); // AuthMiddleware -> ValidateMiddleware -> ControllerMiddleware { success: { userId: 1, body: 'I am OK!' } }
