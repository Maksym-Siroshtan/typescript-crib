"use strict";
const a1 = 5;
const a2 = a1 + "";
const a3 = a1.toString();
const a4 = "555";
const a5 = +a4;
const a6 = parseInt(a4);
const usr2 = {
    name: "Usr2",
    age: 31,
    id: 1,
};
// const adm: IAdmin = { // Плохой вариант потому что разворачиваем лишние ненужные свойства
//   ...usr2,
//   role: 1,
// };
function createUser(u) {
    // Хороший вариант, т.к. берём только то, что нужно
    return {
        name: u.name,
        role: 2,
    };
}
