"use strict";
const n = null;
const n2 = null;
const n3 = null;
const getPersone = () => {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: "John",
            id: 1,
        };
    }
};
const persone = getPersone();
console.log(persone === null || persone === void 0 ? void 0 : persone.name);
