"use strict";
function createError(message) {
    throw new Error(message);
}
function n1() {
    while (true) { }
}
function recursy() {
    recursy();
}
const arrow = "Horizontal";
function checkDirection(action) {
    switch (action) {
        case "Horizontal":
            console.log(action);
            break;
        case "Vertical":
            console.log(action);
            break;
        default:
            const _ = action; // Down будет пойман
            console.log("Error");
    }
}
