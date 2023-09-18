interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(public name: string, public email: string) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
    let target = new UserHistory(this.name, this.email);
    target.createdAt = this.createdAt; // При клонировании объекта запишем время создания оригинала
    return target;
  }
}

let userHistory = new UserHistory("John", "j@j.com");
console.log(userHistory);
let userHistoryClone = userHistory.clone();
userHistoryClone.email = "j-clone@j.com";
console.log(userHistoryClone);
console.log(userHistory);
