"use strict";
const userWithRole = {
    firstname: "John",
    surname: "Smith",
    age: 23,
    roleId: 1,
    createdAt: new Date(),
    log: (roleId) => {
        return `${roleId}`;
    },
};
