class User6 {
  constructor(public id: number, public name: string) {}
}

function getUser3(id: number): User6 {
  return new User6(id, "John");
}

type RT = ReturnType<typeof getUser3>; // Получить возвращаемый тип функции  RT = User6
type RT2 = ReturnType<() => void>; // RT2 = void
type RT3 = ReturnType<<T>() => T>; // RT3 = unknown, т.к. <Т> неизвестен
type RT4 = ReturnType<<T extends string>() => T>; // RT4 = string т.к. T extends string
// Под капотом type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type PT = Parameters<typeof getUser3>; // Получить кортеж входных параметров функции PT = [id: number]
type FirstPT = PT[0]; // Получить первый элемент FirstPT = number
// Под капотом type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

type CP = ConstructorParameters<typeof User6>; // Получить кортеж входных параметров конструктора класса CP = [id: number, name: string]
type SecondCP = CP[1]; // SecondCP = string
// Под капотом type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never

type IT = InstanceType<typeof User6>; // Получить тип инстанса класса IT = User6
// Под капотом type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
