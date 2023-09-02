"use strict";
var StatusPayment;
(function (StatusPayment) {
    StatusPayment[StatusPayment["Holded"] = 0] = "Holded";
    StatusPayment[StatusPayment["Processed"] = 1] = "Processed";
    StatusPayment[StatusPayment["Reversed"] = 2] = "Reversed";
})(StatusPayment || (StatusPayment = {}));
class Payment {
    constructor(id) {
        this.status = StatusPayment.Holded; // Default property
        this.createdAt = new Date(); // Default property
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
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
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.push(...skillOrSkills);
        }
    }
}
const userOverloads = new UserOverloads();
userOverloads.addSkill("Dev");
userOverloads.addSkill(["Dev", "DevOps"]);
console.log(userOverloads);
