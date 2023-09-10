"use strict";
class User6 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getUser3(id) {
    return new User6(id, "John");
}
// Под капотом type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
