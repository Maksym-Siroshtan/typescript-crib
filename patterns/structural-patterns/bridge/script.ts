interface IProvider {
  // Один общий провайдер, который будет мостом
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  // Telegram провайдер который реализует IProvider
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("Disconnected TG");
  }
}

class WatsUpProvider implements IProvider {
  // WatsUp провайдер который реализует IProvider
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("Disconnected WU");
  }
}

class NotificationSender {
  // Основной класс который реализует в себе композицию провайдеров (вместо extends) с помощью provider: IProvider
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect("Connect");
    this.provider.sendMessage("Message");
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  // Основной класс можно легко наследовать
  constructor(provider: IProvider) {
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
