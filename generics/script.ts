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
