"use strict";
class User13 {
}
class Auth {
    // В Auth можем динамически менять стратегию авторизации с помощью метода setStrategy
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    // Логика авторизации JWTStrategy
    auth(user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}
class GithubStrategy {
    // Логика авторизации GithubStrategy
    auth(user) {
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
