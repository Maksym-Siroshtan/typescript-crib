"use strict";
// Awaited используется для того чтобы получить содержимое Promise, а не сам Promise
// type A = Promise<string>; // Получаем тип самого промиса A = Promise<string>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        return [{ name: "Аналитика", url: "analytics" }];
    });
}
function getArray(foo) {
    return __awaiter(this, void 0, void 0, function* () {
        // Корректная типизация
        return [yield foo];
    });
}
function getArray2(foo) {
    return __awaiter(this, void 0, void 0, function* () {
        // Типизация в предидущих версиях TS, менее правильная
        return [yield foo];
    });
}
