interface IStudentsData {
  group: number;
  name: string;
}

const studentsData: IStudentsData[] = [
  { group: 1, name: "a" },
  { group: 1, name: "b" },
  { group: 2, name: "c" },
];

interface IGroup<T> {
  [key: string]: T[]; // Возвращаемые объекты
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]; // Значение свойства по ключу. В данном случае group: 1-я итерация(1) / 2-я итерация(1) / 3-я итерация(2)
    let currentItem = map[itemKey];
    // Первая итерация 1 - undefined
    // Вторая итерация 1 - [{ group: 1, name: "a" }]
    // Третья итерация 2 - undefined
    if (Array.isArray(currentItem)) {
      // Первая итерация 1 - undefined не сработает
      // Вторая итерация 1 - true [{ group: 1, name: "a" }]
      currentItem.push(item);
      // Вторая итерация 1 [{ group: 1, name: "a" }, { group: 1, name: "b" }]
    } else {
      currentItem = [item];
      // Первая итерация 1 - currentItem =  [{ group: 1, name: "a" }]
      // Третья итерация 2 - currentItem = [{ group: 2, name: "c" }]
    }
    map[itemKey] = currentItem;
    // Первая итерация 1 - {'1': [{ group: 1, name: "a" }] }
    // Вторая итерация 1 - {'1': [{ group: 1, name: "a" }, { group: 1, name: "b" }] }
    // Третья итерация 2 -
    // {
    //   '1': [{ group: 1, name: "a" }, { group: 1, name: "b" }],
    //   '2': [{ group: 2, name: "c" }]
    //  }

    return map;
    // Первая итерация 1 - {'1': [{ group: 1, name: "a" }] }
    // Вторая итерация 1 - {'1': [{ group: 1, name: "a" }, { group: 1, name: "b" }] }
    // Третья итерация 2 -
    // {
    //   '1': [{ group: 1, name: "a" }, { group: 1, name: "b" }],
    //   '2': [{ group: 2, name: "c" }]
    //  }
  }, {});
}

const studentsGroup = group<IStudentsData>(studentsData, "group");
console.log(studentsGroup);
