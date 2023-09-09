const conditionalValue: number = Math.random() > 0.5 ? 1 : 0; // js

// conditional types ts

// First example

// Необходимо реализовать такой interface
// interface IHTTPResponse {
//   code: number;
//   data: string | Error;
//   additionalData: string | number;
// }

// Такая реализация допустима, но всегда необходимо помнить последовательность передаваемых generic
// interface IHTTPResponse<T, V> {
//   code: number;
//   data: T;
//   additionalData: V;
// }

// Реализация с помощью conditional types удобна, можно реализовать интерфейс который подходит нескольким объектам
interface IHTTPResponse<T extends "success" | "failed"> {
  code: number;
  data: T extends "success" ? string : Error;
  additionalData: T extends "success" ? string : number;
}

const success: IHTTPResponse<"success"> = {
  code: 200,
  data: "done",
  additionalData: "success",
};

const failed: IHTTPResponse<"failed"> = {
  code: 404,
  data: new Error(),
  additionalData: 404,
};

// Second example

// function with overloads
class User11 {
  id: number;
  name: string;
}

class User11Persistend extends User11 {
  dbId: string;
}

function getUser(id: number): User11;
function getUser(dbId: string): User11Persistend;
function getUser(dbIdOrId: number | string): User11 | User11Persistend {
  if (typeof dbIdOrId === "number") {
    return new User11(); // Обычный юзер
  } else {
    return new User11Persistend(); // Юзер из базы данных
  }
}

const u1 = getUser(1); // u1: User11
const u2 = getUser("qwerty"); // u2: User11Persistend

// function with condition types
type User11OrUser11PersistendType<T extends string | number> = T extends number
  ? User11
  : User11Persistend;

function getUser2<T extends string | number>(
  id: T
): User11OrUser11PersistendType<T> {
  if (typeof id === "number") {
    return new User11() as User11OrUser11PersistendType<T>; // Обычный юзер
  } else {
    return new User11Persistend() as User11OrUser11PersistendType<T>; // Юзер из базы данных
  }
}

const u3 = getUser2(1); // u3: User11
const u4 = getUser2("qwerty"); // u4: User11Persistend
console.log(u3);
console.log(u4);
