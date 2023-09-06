"use strict";
class Vehicle2 {
}
// function kmToMiles<T>(vehicle: T): T {
//   vehicle.run = vehicle.run * 0.62; // Свойство "run" не существует в типе "T".
//   return vehicle;
// }
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run * 0.62;
    return vehicle;
}
class LCV extends Vehicle2 {
}
//kmToMiles({a: 1}) // Аргумент типа "{ a: number; }" нельзя назначить параметру типа "Vehicle2".
kmToMiles(new Vehicle2()); // Working...
kmToMiles(new LCV()); // Working...
kmToMiles({ run: 1 }); // Working... Объект не обязптельно должен быть инстансом класса
function logIdAndAdditionalId(id, additionalId) {
    console.log(id);
    console.log(additionalId);
    return { id, data: additionalId };
}
