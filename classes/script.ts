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

// constructor
class User2 {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(nameOrAge?: string | number, age?: number) {
    if (typeof nameOrAge === "string") {
      this.name = nameOrAge;
    } else if (typeof nameOrAge === "number") {
      this.age = nameOrAge;
    }
    if (typeof age === "number") {
      this.age = age;
    }
  }
}

const userClass2 = new User2();
console.log("userClass2: ", userClass2);
const userClass3 = new User2("John");
console.log("userClass3: ", userClass3);
const userClass4 = new User2(31);
console.log("userClass4: ", userClass4);
const userClass5 = new User2("John", 31);
console.log("userClass5: ", userClass5);
