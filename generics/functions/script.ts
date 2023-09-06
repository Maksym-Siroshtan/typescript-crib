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
