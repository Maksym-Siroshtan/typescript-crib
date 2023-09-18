"use strict";
class TelegramProvider {
    // Telegram провайдер который реализует IProvider
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log("Disconnected TG");
    }
}
class WatsUpProvider {
    // WatsUp провайдер который реализует IProvider
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log("Disconnected WU");
    }
}
class NotificationSender {
    // Основной класс который реализует в себе композицию провайдеров (вместо extends) с помощью provider: IProvider
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect("Connect");
        this.provider.sendMessage("Message");
        this.provider.disconnect();
    }
}
class DelayNotificationSender extends NotificationSender {
    // Основной класс можно легко наследовать
    constructor(provider) {
        super(provider);
    }
    sendDelayed() {
        // Logic...
    }
}
const senderTG = new NotificationSender(new TelegramProvider());
senderTG.send();
const senderWU = new NotificationSender(new WatsUpProvider());
senderWU.send();
