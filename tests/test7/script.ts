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
