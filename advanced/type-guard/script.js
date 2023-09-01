"use strict";
function isString(id) {
    return typeof id === "string";
}
function getProfessor(persone) {
    return "isProfessor" in persone;
}
function getProfessorAlternative(persone) {
    return persone.isProfessor !== undefined;
}
function setProfessorTrue(persone) {
    if (getProfessorAlternative(persone)) {
        persone.isProfessor = true;
    }
    else {
        throw new Error("Этот человек не профессор!");
    }
}
