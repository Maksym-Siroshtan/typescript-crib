"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // Доступно только в классе объявления / синтаксис JS
    }
    set colorAndPrice(color) {
        this._color = color;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get colorAndPrice() {
        return this._color;
    }
    // private addDamage(damage: string) { // Доступно только в классе объявления
    //   this.damages.push(damage);
    // }
    addDamage(damage) {
        // Доступен везде
        this.damages.push(damage);
    }
    isPriceEqual(vehicle) {
        // Будет работать для сравнения двух одинаковых объектов
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(vehicle, _Vehicle_price, "f");
    }
}
_Vehicle_price = new WeakMap();
class EuroTrack extends Vehicle {
    setRun(km) {
        // this.model - working
        // this.damages - error
        // this._color - error доступны только Getter и Setter
        // this.run - working
        // this.#price - error
        return (this.run = km * 0.62);
    }
}
new Vehicle();
// model - working
// damages - error
// this._color - error доступны только Getter и Setter
// run - error
// this.#price - error
