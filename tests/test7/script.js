"use strict";
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
