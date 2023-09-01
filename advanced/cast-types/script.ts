const a1: number = 5;
const a2: string = a1 + "";
const a3: string = a1.toString();

const a4: string = "555";
const a5: number = +a4;
const a6: number = parseInt(a4);

// const a7: string = new String(a1).valueOf(); String - string, разные типы, НЕ РЕКОМЕНДОВАНО!
// const a8: number = new Number(a4).valueOf();

interface IUser2 {
  name: string;
  age: number;
  id: number;
}

const usr2: IUser2 = {
  name: "Usr2",
  age: 31,
  id: 1,
};

interface IAdmin {
  name: string;
  role: number;
}

// const adm: IAdmin = { // Плохой вариант потому что разворачиваем лишние ненужные свойства
//   ...usr2,
//   role: 1,
// };

function createUser(u: IUser2): IAdmin {
  // Хороший вариант, т.к. берём только то, что нужно
  return {
    name: u.name,
    role: 2,
  };
}
