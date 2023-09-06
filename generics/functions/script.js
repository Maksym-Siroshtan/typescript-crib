"use strict";
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
