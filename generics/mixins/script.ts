// Типизируем конструктор
// type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accordion {
  isOpened: boolean;
}

type ListType = GConstructor<List>; // Конструированный тип для List
type AccordionType = GConstructor<Accordion>; // Конструированный тип для Accordion

class ExtendedListClass extends List {
  // Вариант с наследованием класса
  first() {
    return this.items[0];
  }
}

// Вариант с использованием миксина
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  // Функция принимает класс и в результате возвращает класс который экстендит переданный класс
  // Преимущество перед обычным extends в том что мы замиксовали ListType и AccordionType и по факту можем их использовать друг с другом, одновременно дополняя какими-то свойствами или методами
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AccordionList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const listResult = new list(["first", "second"]);
console.log(listResult);
