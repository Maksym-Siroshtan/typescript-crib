"use strict";
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemPrices() {
        return this.items.reduce((acc, item) => (acc += item.getPrice()), 0);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.getItemPrices() + this.deliveryFee;
    }
}
class Package extends DeliveryItem {
    getPrice() {
        return this.getItemPrices();
    }
}
class Product1 extends DeliveryItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
// Создаём магазин
const shop = new DeliveryShop(100);
// Добавляем продукты в магазин
shop.addItem(new Product1(10000));
// Создаём упаковку pack1
const pack1 = new Package();
// В упаковку добавляем продукты
pack1.addItem(new Product1(100));
pack1.addItem(new Product1(1000));
// Добавляем продукты которые упакованы в магазин
shop.addItem(pack1);
// Создаём упаковку pack1
const pack2 = new Package();
// В упаковку добавляем продукты
pack2.addItem(new Product1(10));
pack2.addItem(new Product1(200));
// Добавляем продукты которые упакованы в магазин
shop.addItem(pack2);
// Получаем общую стоимость всех продуктов, как в упаковке, так и без неё
console.log(`Общая стоимость корзины товаров: ${shop.getPrice()}`);
// getItemPrices(): number {
//   return this.items.reduce(
//     (acc: number, item: DeliveryItem) => (acc += item.getPrice()),
//     0
//   );
// }
// DeliveryShop { shop.getPrice() -> this.getItemPrices() + this.deliveryFee
//   items: [
//     Product1 { items: [], price: 10000 }, item.getPrice() -> return this.price
//     Package { items: [Array] }, item.getPrice() -> this.getItemPrices()
//     Package { items: [Array] } item.getPrice() -> this.getItemPrices()
//   ],
//   deliveryFee: 100
// }
// Package {
//   items: [
//     Product1 { items: [], price: 100 }, item.getPrice() -> return this.price
//     Product1 { items: [], price: 1000 } item.getPrice() -> return this.price
//   ]
// }
