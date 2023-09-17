class MyMap {
  // Общий singleton для двух разных сервисов
  private static instance: MyMap; // только на MyMap
  map: Map<number, string> = new Map(); // на instance от MyMap

  private constructor() {} // только внутри MyMap

  clean() { // на instance от MyMap
    this.map = new Map();
  }

  public static get(): MyMap { // только на MyMap
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance;
  }
}

class Service1 {
  // Сервис 1, добавляет значение по ключу в singleton
  addMap(key: number, value: string) {
    const myMap = MyMap.get();
    myMap.map.set(key, value);
  }
}

class Service2 {
  // Сервис 2, читает значение по ключу в singleton
  getKey(key: number) {
    const myMap = MyMap.get();
    console.log(myMap.map.get(key)); // "Working..."
    myMap.clean();
    console.log(myMap.map.get(key)); // undefined
  }
}

new Service1().addMap(1, "Working..."); // Установить значение
new Service2().getKey(1); // Получить значение
