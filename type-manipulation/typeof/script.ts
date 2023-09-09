let stringOrNumber: string | number;

if (Math.random() > 0.5) {
  stringOrNumber = 5;
} else {
  stringOrNumber = "string";
}

if (typeof stringOrNumber === "string") {
  // typeof применим для сужения типов
  console.log(stringOrNumber);
} else {
  console.log(stringOrNumber);
}

let stringOrNumber2: typeof stringOrNumber; // С помощью typeof можем переиспользовать уже существующий тип

const user9 = {
  name: "John",
  age: 30,
};

// type keyOfUser9 = keyof user9; Error - "user9" относится к значению, но здесь используется как тип.
type keyOfUser9 = keyof typeof user9; // typeof может получить значение как тип

enum Direction2 {
  Up, // 0
  Down, // 1
}

type d = keyof typeof Direction2; // d = "Up" | "Down"
