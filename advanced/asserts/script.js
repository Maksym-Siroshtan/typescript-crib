"use strict";
const animal = {}; // допустим получаем из стороннего API(не знаем что это)
assertAnimal(animal);
animal.name = "Cat";
function assertAnimal(obj) {
    if (typeof obj === "object" && !!obj) {
        return;
    }
    throw new Error("Not an animal!");
}
