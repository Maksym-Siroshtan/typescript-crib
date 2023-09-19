"use strict";
class KVDatabase {
    constructor() {
        // Существующая DB, с которой работает функция runDB
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDB {
    // Сторонняя DB, с которой нужно подружить функцию runDB
    savePersistent(data) {
        console.log(data);
    }
}
class PersistentDBAdapter extends KVDatabase {
    // Адаптер для работы со сторонней PersistentDB
    // Расширяем KVDatabase для получения метода save()
    constructor(database) {
        super();
        this.database = database;
        // Наследуемся от KVDatabase
    }
    save(key, value) {
        // Переопределяем метод save()
        this.database.savePersistent({ key, value });
    }
}
function runDB(base) {
    // Принимает только KVDatabase
    base.save("myKey", "myValue");
}
runDB(new PersistentDBAdapter(new PersistentDB()));
