"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Built-in generic
const numbersGenericArray = [1, 2, 3, 4, 5];
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Чтобы явно описать тип возвращаемого значения Promise можно использовать generic
        const data = yield new Promise((resolve, reject) => {
            // Если не указать тип возвращаемого значения Promise мы получим unknown
            resolve(1);
        });
    });
}
const ckeck = {
    drive: true,
    //string:boolean
    kpp: false,
};
// Function with generic
function logMiddleware(data) {
    console.log(data);
    return data;
}
// const logA = logMiddleware('A');
// const logOne = logMiddleware(1);
// Можно явно задать получаемое значение
const logA = logMiddleware("A");
const logOne = logMiddleware(1);
function getSlicedHalf(data) {
    const l = data.length / 2;
    return data.slice(0, l);
}
// const spliceStringArray = ["a", "b", "c", "d"];
// const spliceNumberArray = [1, 2, 3, 4];
const slicedStringArray = getSlicedHalf(["a", "b", "c", "d"]);
const slicedNumberArray = getSlicedHalf([1, 2, 3, 4]);
