enum StatusPayment {
  Holded,
  Processed,
  Reversed,
}

class Payment {
  id: number;
  status: StatusPayment = StatusPayment.Holded; // Default property
  createdAt: Date = new Date(); // Default property
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
    if (this.status === StatusPayment.Processed) {
      throw new Error("Обработанный платёж невозможно отложить");
    }
    this.status = StatusPayment.Reversed;
    this.updatedAt = new Date();
  }
}

const paymentClass = new Payment(1);
console.log(paymentClass);
paymentClass.unholdPayment();
console.log(paymentClass);
const paymentLifeTime = paymentClass.getPaymentLifeTime();
console.log(paymentLifeTime);

// Methods overloads
class UserOverloads {
  skills: string[] = [];

  // addSkill(/* skill: string or string[] */) {}
  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === "string") {
      this.skills.push(skillOrSkills);
    } else {
      this.skills.push(...skillOrSkills);
    }
  }
}

const userOverloads = new UserOverloads();
userOverloads.addSkill("Dev");
userOverloads.addSkill(["Dev", "DevOps"]);
console.log(userOverloads);
