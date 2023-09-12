interface IUserService4 {
  users: number;

  getUsersInDatabase(): number;
}

// При инициализации порядок вызова декораторов будет такой:
@setUsers4(2) // 1) @setUsers4(2)
@logUsers4() // 2) @logUsers4()
// НО, при выполнении декораторов их очерёдность вызова будет в ОБРАТНОМ порядке. Последовательность вызова ВАЖНА.
@setUsersAdvanced(4)
class UserService4 implements IUserService4 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function setUsers4(users: number) {
  // Фабрика декораторов
  console.log("setUsers init"); // 1
  return (target: Function) => {
    console.log("setUsers run"); // 4
    target.prototype.users = users;
  };
}

function logUsers4() {
  console.log("log init"); // 2
  return (target: Function) => {
    console.log("log run"); // 3
    console.log(target);
  };
}

function setUsersAdvanced(users: number) {
  // Фабрика декораторов
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
}

console.log(new UserService4().getUsersInDatabase());
