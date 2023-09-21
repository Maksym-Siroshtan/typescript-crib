"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log("Отправляю уведомление...");
    }
}
class Log2 {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify("EventHandler", "myEvent");
    }
}
class NotificationMediator {
    constructor(notifications, logger, handler) {
        this.notifications = notifications;
        this.logger = logger;
        this.handler = handler;
    }
    notify(_, event) {
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
