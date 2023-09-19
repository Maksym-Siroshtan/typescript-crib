"use strict";
class Notify {
    // Уведомление
    send(template, to) {
        console.log(`Отправляю ${template}: ${to}`);
    }
}
class NotifyLog {
    // Журнал уведомлений
    log(message) {
        console.log(message);
    }
}
class NotifyTemplate {
    constructor() {
        // Шаблоны уведомлений
        this.templates = [
            { name: "hello", template: "<h1>Hello!</h1>" },
            { name: "bye", template: "<h1>Bye!</h1>" },
        ];
    }
    getTemplateByName(name) {
        // Получить шаблон по имени
        return this.templates.find((t) => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new NotifyLog();
        this.template = new NotifyTemplate();
    }
    send(templateName, to) {
        // Метод который объединяет в себе общую логику
        const data = this.template.getTemplateByName(templateName);
        if (!data) {
            this.logger.log("Шаблон не найден");
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("Уведомление отправлено");
    }
}
const service = new NotificationFacade();
service.send("hello", "hello@h.com"); // Ok...
service.send("bye-bye", "bye@b.com"); // Шаблон не найден
service.send("bye", "bye@b.com"); // Ok...
