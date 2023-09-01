"use strict";
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function getColorCar(car) {
    var _a;
    return (_a = car.color) === null || _a === void 0 ? void 0 : _a.g;
}
const carTwo = {
    brand: "Honda",
    year: 2001,
};
