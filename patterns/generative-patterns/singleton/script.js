"use strict";
class MyMap {
    constructor() {
        this.map = new Map(); // на instance от MyMap
    } // только внутри MyMap
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
class Service1 {
    // Сервис 1, добавляет значение по ключу в singleton
    addMap(key, value) {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    // Сервис 2, читает значение по ключу в singleton
    getKey(key) {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key)); // "Working..."
        myMap.clean();
        console.log(myMap.map.get(key)); // undefined
    }
}
new Service1().addMap(1, "Working..."); // Установить значение
new Service2().getKey(1); // Получить значение
