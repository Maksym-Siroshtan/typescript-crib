interface IMediator {
  // Поставить в известность
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  public mediator: IMediator;

  setMediator(mediator: IMediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log("Отправляю уведомление...");
  }
}

class Log2 {
  log(message: string) {
    console.log(message);
  }
}

class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify("EventHandler", "myEvent");
  }
}

class NotificationMediator implements IMediator {
  constructor(
    public notifications: Notifications,
    public logger: Log2,
    public handler: EventHandler
  ) {}

  notify(_: string, event: string): void {
    switch (event) {
      case "myEvent":
        this.notifications.send();
        this.logger.log("Отправлено!");
        break;
    }
  }
}

const notifications = new Notifications();
const logger = new Log2();
const handler = new EventHandler();

const m = new NotificationMediator(notifications, logger, handler);
handler.setMediator(m);
handler.myEvent();
