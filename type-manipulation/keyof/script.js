"use strict";
const keyName = "name"; // Применим к переменной созданный тип и TS подскажет существующте ключи name или age
const keyAge = "age";
function getValue(obj, key) {
    // Первым параметром принимаем объект типа IUser8, вторым один из ключей которые содержатся в этом объекте
    return obj[key];
}
const user8 = {
    name: "John",
    age: 34,
};
// const value = getValue(user8, "names"); Аргумент типа ""names"" нельзя назначить параметру типа "keyof IUser8"
const value = getValue(user8, "name");
console.log(value);
