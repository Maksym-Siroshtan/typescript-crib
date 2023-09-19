class KVDatabase {
  // Существующая DB, с которой работает функция runDB
  private db: Map<string, string> = new Map();

  save(key: string, value: string) {
    this.db.set(key, value);
  }
}

class PersistentDB {
  // Сторонняя DB, с которой нужно подружить функцию runDB
  savePersistent(data: Object) {
    console.log(data);
  }
}

class PersistentDBAdapter extends KVDatabase {
  // Адаптер для работы со сторонней PersistentDB
  // Расширяем KVDatabase для получения метода save()

  constructor(public database: PersistentDB) {
    super();
    // Наследуемся от KVDatabase
  }

  override save(key: string, value: string): void {
    // Переопределяем метод save()
    this.database.savePersistent({ key, value });
  }
}

function runDB(base: KVDatabase) {
  // Принимает только KVDatabase
  base.save("myKey", "myValue");
}

runDB(new PersistentDBAdapter(new PersistentDB()));
