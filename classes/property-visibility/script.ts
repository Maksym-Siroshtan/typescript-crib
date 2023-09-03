class Vehicle {
  // model: string; === public model: string;
  public model: string; // Доступно везде
  private damages: string[]; // Доступно только в классе объявления
  private _color: string; // Доступно только в классе объявления, извне доступны только Getter и Setter
  protected run: number; // Доступно в классе объявления и в наследующих классах
  #price: number; // Доступно только в классе объявления / синтаксис JS

  set colorAndPrice(color: string) {
    this._color = color;
    this.#price = 100;
  }

  get colorAndPrice() {
    return this._color;
  }

  // private addDamage(damage: string) { // Доступно только в классе объявления
  //   this.damages.push(damage);
  // }

  addDamage(damage: string) {
    // Доступен везде
    this.damages.push(damage);
  }

  isPriceEqual(vehicle: Vehicle) {
    // Будет работать для сравнения двух одинаковых объектов
    return this.#price === vehicle.#price;
  }
}

class EuroTrack extends Vehicle {
  setRun(km: number) {
    // this.model - working
    // this.damages - error
    // this._color - error доступны только Getter и Setter
    // this.run - working
    // this.#price - error
    return (this.run = km * 0.62);
  }
}

new Vehicle();
// model - working
// damages - error
// this._color - error доступны только Getter и Setter
// run - error
// this.#price - error
