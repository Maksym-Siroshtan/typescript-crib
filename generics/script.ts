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

// Generic как тип функции, а также использование с interface и type
const sliceFoo: <T>(data: Array<T>) => Array<T> = getSlicedHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: LogLineType<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

// Limitation generic
class Vehicle2 {
  run: number;
}

// function kmToMiles<T>(vehicle: T): T {
//   vehicle.run = vehicle.run * 0.62; // Свойство "run" не существует в типе "T".
//   return vehicle;
// }

function kmToMiles<T extends Vehicle2>(vehicle: T): T {
  vehicle.run = vehicle.run * 0.62;
  return vehicle;
}

class LCV extends Vehicle2 {
  capacity: number;
}

//kmToMiles({a: 1}) // Аргумент типа "{ a: number; }" нельзя назначить параметру типа "Vehicle2".
kmToMiles(new Vehicle2()); // Working...
kmToMiles(new LCV()); // Working...
kmToMiles({ run: 1 }); // Working... Объект не обязптельно должен быть инстансом класса

function logIdAndAdditionalId<T extends string | number, Y>(
  id: T,
  additionalId: Y
): { id: T; data: Y } {
  console.log(id);
  console.log(additionalId);
  return { id, data: additionalId };
}
