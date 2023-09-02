class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const userClass = new User("John");
console.log(userClass);
userClass.name = "Alex";
console.log(userClass);

// class Admin {
//   role: number; // Property 'role' has no initializer and is not definitely assigned in the constructor.
// }

// class Admin {
//   role!: number; ! or "strictPropertyInitialization": false
// }

class Admin {
  role: number;
}

const admin = new Admin();
admin.role = 1;
