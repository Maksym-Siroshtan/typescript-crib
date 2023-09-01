function logIdVoid(id: string | number) {
  console.log(id);
}

type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
  return true;
};

const a = f2();

const skillsTwo = ["Dev", "DevOps"];

const userSkills = {
  skill: ["skills"],
};

skillsTwo.forEach((s) => userSkills.skill.push(s)); // forEach return void
