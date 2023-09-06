interface ID {
  id: number;
}

interface IData extends ID {
  name: string;
}

enum SortMethods {
  Increase = "increase", // по возрастанию
  Descending = "descending", // по убыванию
}

const data: Array<IData> = [
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Надя" },
];

function sortId<T extends ID>(
  array: Array<T>,
  options: SortMethods = SortMethods.Increase
): Array<T> {
  return array.sort((a, b) => {
    // return options === SortMethods.Increase ? a.id - b.id : b.id - a.id;
    switch (options) {
      case SortMethods.Increase:
        return a.id - b.id;
      case SortMethods.Descending:
        return b.id - a.id;
    }
  });
}

const resultIncrease = sortId(data);
console.log("Сортировать по возрастанию", resultIncrease);

const resultDescending = sortId(data, SortMethods.Descending);
console.log("Сортировать по убыванию", resultDescending);
