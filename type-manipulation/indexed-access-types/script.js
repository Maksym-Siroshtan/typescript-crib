"use strict";
const user10 = {
    name: "John",
    roles: [],
    permission: {
        endDate: new Date(),
    },
};
// Значения
const user10Name = user10["name"]; // John - получено значение
// let roleNames = 'roles' Error - Тип "IUser10" не содержит соответствующую сигнатуру индекса для типа "string"
// let roleNames: 'roles' = 'roles' Working...
const roleNames = "roles";
// Получить union types из всех значений массива
// const roles = ["admin", "user", "super-user"]; roles: string[]
const roles = ["admin", "user", "super-user"]; // roles: readonly ["admin", "user", "super-user"]
