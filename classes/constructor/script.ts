class User2 {
  name: string;
  age: number;

  // Overloads
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
