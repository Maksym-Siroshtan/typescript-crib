interface IUser8 {
  name: string;
  age: number;
}

type keysOfUser = keyof IUser8; // Запишем ключи name, age интерфейса IUser8 в новый тип

const keyName: keysOfUser = "name"; // Применим к переменной созданный тип и TS подскажет существующте ключи name или age
const keyAge: keysOfUser = "age";

function getValue<T extends IUser8, K extends keysOfUser>(obj: T, key: K): T[K] {
  // Первым параметром принимаем объект типа IUser8, вторым один из ключей которые содержатся в этом объекте
  return obj[key];
}

const user8: IUser8 = {
  name: "John",
  age: 34,
};

// const value = getValue(user8, "names"); Аргумент типа ""names"" нельзя назначить параметру типа "keyof IUser8"
const value = getValue(user8, "name");
console.log(value);
