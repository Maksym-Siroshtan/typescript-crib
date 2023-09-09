"use strict";
const conditionalValue = Math.random() > 0.5 ? 1 : 0; // js
const success = {
    code: 200,
    data: "done",
    additionalData: "success",
};
const failed = {
    code: 404,
    data: new Error(),
    additionalData: 404,
};
// Second example
// function with overloads
class User11 {
}
class User11Persistend extends User11 {
}
function getUser(dbIdOrId) {
    if (typeof dbIdOrId === "number") {
        return new User11(); // Обычный юзер
    }
    else {
        return new User11Persistend(); // Юзер из базы данных
    }
}
const u1 = getUser(1); // u1: User11
const u2 = getUser("qwerty"); // u2: User11Persistend
function getUser2(id) {
    if (typeof id === "number") {
        return new User11(); // Обычный юзер
    }
    else {
        return new User11Persistend(); // Юзер из базы данных
    }
}
const u3 = getUser2(1); // u3: User11
const u4 = getUser2("qwerty"); // u4: User11Persistend
console.log(u3);
console.log(u4);
