"use strict";
/* class Product {
  name: string;
  id: number;
  price: number;

  constructor(name: string, id: number, price: number) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
} */
class Product {
    // Короткая запись
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
    totalProductPrice() {
        return this.products
            .map((product) => product.price)
            .reduce((total, price) => {
            return total + price;
        }, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error("В корзине нет товаров");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки");
        }
        return { success: true };
    }
}
// Создание корзины
const cart = new Cart();
// Создание экземпляров продуктов
const apple = new Product("apple", 1, 10);
const banana = new Product("banana", 2, 15);
const orange = new Product("orange", 3, 20);
// Добавление продуктов в корзину
cart.addProduct(apple);
cart.addProduct(banana);
cart.addProduct(orange);
console.log("Добавил 3 продукта в корзину", cart); // 3 Продукта
// Удаление продукта из корзины по Id
cart.deleteProduct(3);
console.log("Удалил продукт orange из корзины", cart); // 2 Продукта
// Создание экземпляров доставки
const homeDelivery = new HomeDelivery(new Date(), "Poltavska obl.Lubny"); // Адресная доставка
const shopDelivery = new ShopDelivery(1); // Доставка на магазин
// Добавление доставки
cart.setDelivery(shopDelivery);
console.log("Итоговая корзина продуктов + доставка", cart);
// Подсчёт общей стоимости товаров в корзине
const totalPrice = cart.totalProductPrice();
console.log("Общая цена итоговой корзины", totalPrice);
// Проверка корзины на заполненность продуктами и на указания доставки
cart.checkOut();
