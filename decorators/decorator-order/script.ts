function Uni(name: string): any {
  // В name передаём то, что декорируем
  console.log(`Инициализация: ${name}`);
  return function () {
    // Возвращаем функцию которая декорирует
    console.log(`Вызов: ${name}`);
  };
}

@Uni("Класс")
class MyClass {
  @Uni("Свойство 3") // 1
  // Вначале будет вызван ОБЫЧНЫЙ props(не static)
  // Не зависимо от порядка
  props3?: any;

  @Uni("Свойство 1") // 2
  // На одном уровне вызова, таком, как Свойство 3 и Свойство 1 будет вызвано согласно порядку написания
  props?: any;

  @Uni("Свойство static")
  // После ОБЫЧНОГО props(не static), будет вызван static props
  // Не зависимо от порядка
  static props2?: any;

  @Uni("Метод static")
  // После ОБЫЧНОГО method(не static), будет вызван static method
  // Не зависимо от порядка
  static method2(@Uni("Параметр метода static") _: any) {}

  @Uni("Метод")
  // Вначале будет вызван ОБЫЧНЫЙ method(не static)
  // Не зависимо от порядка
  method(@Uni("Параметр метода") _: any) {}

  constructor(@Uni("Параметр конструктора") _: any) {}
}

// Порядок вызова декораторов представлен в файле order.txt
