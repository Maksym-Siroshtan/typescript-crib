"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtendedListClass extends List {
    // Вариант с наследованием класса
    first() {
        return this.items[0];
    }
}
// Вариант с использованием миксина
function ExtendedList(Base) {
    // Функция принимает класс и в результате возвращает класс который экстендит переданный класс
    // Преимущество перед обычным extends в том что мы замиксовали ListType и AccordionType и по факту можем их использовать друг с другом, одновременно дополняя какими-то свойствами или методами
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
const list = ExtendedList(AccordionList);
const listResult = new list(["first", "second"]);
console.log(listResult);
