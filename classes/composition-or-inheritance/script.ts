// Композиция или наследование ?

// Пример 1) Наследование
class UserListItem {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class UserList extends Array<UserListItem> {
  // Таким образом унаследовали методы массива для User6
  // Но такие методы как toString() или toLocaleString() нам не нужны
  // Поэтому такая практика наследования не лучшее решение(смешиваем бизнес логику и стандартные инструменты)

  findUserByName(name: string) {
    // Добавили кастомный метод
    return this.find((user) => user.name === name);
  }

  override toString(): string {
    // Можно переопределить имеющиеся неподходящие методы на более подходящие, но лучше использовать КОМПОЗИЦИЮ
    return this.map((user) => user.name).join(", ");
  }
}

const userList = new UserList();
const userItem1 = new UserListItem("John");
const userItem2 = new UserListItem("Ann");
userList.push(userItem1);
userList.push(userItem2);
console.log("Список позьзователей: ", userList);
console.log("Список имён позьзователей: ", userList.toString());
console.log("Конкретный пользователь: ", userList.findUserByName("Ann"));

// Пример 1) Композиция
class UserList2 {
  users: UserListItem[] = [];
  // Не наследуемся от стандартного Array, а создаём свой внутренний массив пользователей
  // И пишем для него только те методы, которые нам нужны, а не тянем за собой все подряд

  push(user: UserListItem) {
    this.users.push(user);
  }

  pop() {
    // ....
  }
}

const userList2 = new UserList2();
const userItem3 = new UserListItem("Ben");
userList2.push(userItem3);
console.log(userList2);

// Пример 2) наследование
class Payment3 {
  date: Date;
}

class UserWithPayment3 extends Payment3 {
  // Плохое решение, т.к. юзер и платёж два разных домена, но связаны они жёстко
  name: string;
}

// Пример 2) композиция
class UserWithPayment4 {
  // Хорошое решение, спрятать внутри композиции и разделить отдельно юзер, отдельно платёж
  user: UserListItem;
  payment: Payment3;

  constructor(user: UserListItem, payment: Payment3) {
    this.user = user;
    this.payment = payment;
  }
}
