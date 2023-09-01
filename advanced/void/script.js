"use strict";
function logIdVoid(id) {
    console.log(id);
}
const f1 = () => { };
const f2 = () => {
    return true;
};
const a = f2();
const skillsTwo = ["Dev", "DevOps"];
const userSkills = {
    skill: ["skills"],
};
skillsTwo.forEach((s) => userSkills.skill.push(s)); // forEach return void
