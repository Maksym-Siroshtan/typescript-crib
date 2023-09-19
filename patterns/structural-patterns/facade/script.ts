class Notify {
  // Уведомление
  send(template: string, to: string) {
    console.log(`Отправляю ${template}: ${to}`);
  }
}

class NotifyLog {
  // Журнал уведомлений
  log(message: string) {
    console.log(message);
  }
}

interface ITemplate {
  name: string;
  template: string;
}

class NotifyTemplate {
  // Шаблоны уведомлений
  private templates: ITemplate[] = [
    { name: "hello", template: "<h1>Hello!</h1>" },
    { name: "bye", template: "<h1>Bye!</h1>" },
  ];

  getTemplateByName(name: string) {
    // Получить шаблон по имени
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  // Реализация логики уведомлений скрыта в одном классе NotificationFacade
  private notify: Notify;
  private logger: NotifyLog;
  private template: NotifyTemplate;

  constructor() {
    this.notify = new Notify();
    this.logger = new NotifyLog();
    this.template = new NotifyTemplate();
  }

  send(templateName: string, to: string) {
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
