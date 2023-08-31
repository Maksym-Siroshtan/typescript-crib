"use strict";
const user = {
    firstname: "Maksym",
    surname: "Siroshtan",
    city: "Lubny",
    age: 31,
    skills: ["HTML", "CSS", "JS", "TS"],
};
const getFullUserName = (userEntity) => {
    return `${userEntity.firstname} ${userEntity.surname}`;
};
const skills = ["Dev", "DevOps", "Testing"];
for (let skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills
    .filter((s) => s !== "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
