function multiply(first: number, second?: number) {
  if (!second) {
    return first * first;
  }
  return first * second;
}

interface ICarTwo {
  brand: string;
  color?: {
    r: "red";
    g: "green";
  };
  year: number;
}

function getColorCar(car: ICarTwo) {
  return car.color?.g;
}

const carTwo = {
  brand: "Honda",
  year: 2001,
};
