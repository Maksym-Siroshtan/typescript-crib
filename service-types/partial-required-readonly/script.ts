interface IUser12 {
  name: string;
  age?: number;
  email: string;
}

type PartialUserType = Partial<IUser12>; // Все свойства IUser12 необязательны
const part: PartialUserType = {}; // Нужно быть осторожным. Пустой объект также будет валиден
// Partial под капотом выглядит так
// type Partial<T> = {
//   [K in keyof T]?: T[K];
// };

type RequiredUserType = Required<IUser12>; // Все свойства IUser12 обязательны
// Required под капотом выглядит так
// type Required<T> = {
//   [K in keyof T]-?: T[K];
// };

type ReadonlyUserType = Readonly<IUser12>; // Все свойства IUser12 только для чтения
// Readonly под капотом выглядит так
// type Readonly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// Также можно комбинировать дженерики, например:
type ReadonlyAndRequiredUserType = Readonly<Required<IUser12>>; // Все свойства IUser12 только для чтения и обязательны
