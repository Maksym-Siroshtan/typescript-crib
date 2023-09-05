// Built-in generic
const numbersGenericArray: Array<number> = [1, 2, 3, 4, 5];

async function getData() {
  // Чтобы явно описать тип возвращаемого значения Promise можно использовать generic
  const data = await new Promise<number>((resolve, reject) => {
    // Если не указать тип возвращаемого значения Promise мы получим unknown
    resolve(1);
  });
}

const ckeck: Record<string, boolean> = {
  drive: true,
  //string:boolean
  kpp: false,
};

// Function with generic
function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

// const logA = logMiddleware('A');
// const logOne = logMiddleware(1);
// Можно явно задать получаемое значение
const logA = logMiddleware<string>("A");
const logOne = logMiddleware<number>(1);

function getSlicedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.slice(0, l);
}

// const spliceStringArray = ["a", "b", "c", "d"];
// const spliceNumberArray = [1, 2, 3, 4];
const slicedStringArray = getSlicedHalf<string>(["a", "b", "c", "d"]);
const slicedNumberArray = getSlicedHalf<number>([1, 2, 3, 4]);
