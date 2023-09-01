"use strict";
const colors = ["Red", "Green", "Blue"];
// const colorsOne: string[] = ["Red", "Green", "Blue", 1]; Type 'number' is not assignable to type 'string'.
const numbers = [1, 2, 3, 4, 5];
const skills = ["Dev", "DevOps", "Testing"];
for (let skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills
    .filter((s) => s !== "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
