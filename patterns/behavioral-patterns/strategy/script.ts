class User13 {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  // Интерфейс который объединит в себе все алгоритмы авторизации
  auth(user: User13): boolean;
}

class Auth {
  // В Auth можем динамически менять стратегию авторизации с помощью метода setStrategy
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: User13): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  // Логика авторизации JWTStrategy

  auth(user: User13): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}

class GithubStrategy implements AuthStrategy {
  // Логика авторизации GithubStrategy

  auth(user: User13): boolean {
    if (user.githubToken) {
      // Go to API...
      return true;
    }
    return false;
  }
}

const user13 = new User13();
user13.jwtToken = "jwt-token"; // У пользователя есть jwtToken

const auth = new Auth(new JWTStrategy()); // Авторизация по JWTStrategy
console.log(auth.authUser(user13)); // true - т.к. есть jwtToken
auth.setStrategy(new GithubStrategy()); // Динамически изменим авторизацию
console.log(auth.authUser(user13)); // false - т.к. у данного пользователя отсутствует githubToken
