interface IUserService2 {
  users: number;
  getUsersInDatabase(): number;
}

class UserService2 implements IUserService2 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

// В данном случае декоратор это функция которая модифицирует наш объект
function nullUsers(obj: UserService2) {
  obj.users = 0;
  return obj;
}

function logUsers(obj: UserService2) {
  console.log('Users: ' + obj.users);
  return obj;
}

console.log(new UserService2().getUsersInDatabase()); // 1000
console.log(nullUsers(new UserService2()).getUsersInDatabase()); // 0
console.log(logUsers(nullUsers(new UserService2())).getUsersInDatabase()); // Users: 0   0
