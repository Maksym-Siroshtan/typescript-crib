// Допустим мы получили функцию runTransaction из сторонней библиотеки
function runTransaction(transaction: { fromTo: [string, string] }) {
  console.log(transaction);
}

// Как нам правильно типизировать нашу транзакцию ? Чтобы узнать в каком виде передать в функцию

// 1)
// const transaction = {
//   fromTo: ["1", "2"], // Вродебы подходит, но нет, ошибка Тип "string[]"
// };

//  runTransaction(transaction); Error Тип "string[]" не может быть назначен для типа "[string, string]".

// 2) as
// const transaction = {
//   fromTo: ["1", "2"] as [string, string], // Захардкодили, РАБОТАЕТ, но это не всегда правильно
// };

// 3) infer
const transaction: GetFirstArgType<typeof runTransaction> = {
  // Infer принудительно вытаскивает из типа функции runTransaction тип первого аргумента, transaction - fromTo: [string, string]
  fromTo: ["1", "2"], // fromTo: [string, string]
};

type GetFirstArgType<T> = T extends (first: infer First, ...args: any[]) => any
  ? First // если T extends от указанной выше функции, то принудительно заберём тип первого аргумента
  : never; // иначе невыполнится никогда

runTransaction(transaction); // Working...

// С помощью infer можем получить аргументы first, second... и т.д
