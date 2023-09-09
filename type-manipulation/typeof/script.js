"use strict";
let stringOrNumber;
if (Math.random() > 0.5) {
    stringOrNumber = 5;
}
else {
    stringOrNumber = "string";
}
if (typeof stringOrNumber === "string") {
    // typeof применим для сужения типов
    console.log(stringOrNumber);
}
else {
    console.log(stringOrNumber);
}
let stringOrNumber2; // С помощью typeof можем переиспользовать уже существующий тип
const user9 = {
    name: "John",
    age: 30,
};
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
})(Direction2 || (Direction2 = {}));
