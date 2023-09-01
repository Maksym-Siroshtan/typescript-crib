interface Animal {
  name: string;
}

const animal = {}; // допустим получаем из стороннего API(не знаем что это)
assertAnimal(animal);
animal.name = "Cat";

function assertAnimal(obj: unknown): asserts obj is Animal {
  if (typeof obj === "object" && !!obj) {
    return;
  }
  throw new Error("Not an animal!");
}
