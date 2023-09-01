const n: null = null;
const n2: any = null;
const n3: unknown = null;
// const n4: string = null; Будет работать при переключении флага "strictNullChecks": true - на false НЕ РЕКОМЕНДОВАНО!
// const n5: number = null;
// const n6: boolean = null;
// const n7: undefined = null;

type StringOrNumber = string | number;

interface IPersone {
  name: string;
  id: StringOrNumber;
}

const getPersone = () => {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "John",
      id: 1,
    } as IPersone;
  }
};

const persone = getPersone();
console.log(persone?.name);
