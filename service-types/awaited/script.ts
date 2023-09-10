// Awaited используется для того чтобы получить содержимое Promise, а не сам Promise
// type A = Promise<string>; // Получаем тип самого промиса A = Promise<string>

type A = Awaited<Promise<string>>; // Получаем тип значения внутри промиса A = string

type A2 = Awaited<Promise<Promise<string>>>;
// Работает также с вложенными промисами, рекурсивно проходит по ним и вытягивает значение. A = string.

// Под капотом
// type Awaited<T> =
//     T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//         T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//             F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
//                 Awaited<V> : // recursively unwrap the value
//                 never : // the argument to `then` was not callable
//         T; // non-object or non-thenable

interface IMenu {
  name: string;
  url: string;
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: "Аналитика", url: "analytics" }];
}

type A3 = ReturnType<typeof getMenu>; // Получили тип промис A3 = Promise<IMenu[]>
type A4 = Awaited<ReturnType<typeof getMenu>>; // Получили тип возвращаемого промисом объекта A4 = IMenu[]

async function getArray<T>(foo: T): Promise<Awaited<T>[]> {
  // Корректная типизация
  return [await foo];
}

async function getArray2<T>(foo: T): Promise<T[]> {
  // Типизация в предидущих версиях TS, менее правильная
  return [await foo];
}
