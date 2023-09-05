"use strict";
/*
  Необходимо написать функцию toString, которая принимает любой тип и возвращает его строковое представление. Если не может, то возвращает undefined
*/
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "string":
            return data;
        case "number":
        case "boolean":
        case "bigint":
        case "symbol":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
const arr = toString([1, 2, 3]);
const str = toString("str");
const num = toString(10);
const boo = toString(true);
const sym = toString(Symbol());
const foo = toString(() => { });
const obj = toString({ key: 1 }); // Можно задать какой именно объект функция ждёт!
console.log(typeof arr, arr); // string 1,2,3
console.log(typeof str, str); // string str
console.log(typeof num, num); // string 10
console.log(typeof boo, boo); // string true
console.log(typeof sym, sym); // string Symbol()
console.log(typeof foo, foo); // string () => { }
console.log(typeof obj, obj); // string {"a":1}
