"use strict";
class Form {
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const res = this.fill(form); // Наполняем
        this.log(res); // Логируем
        this.send(res); // Отправляем
    }
    log(data) {
        console.log(data);
    }
}
class FirstAPI extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log(`Отправляю ${data}`);
    }
}
class SecondAPI extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log(`Отправляю ${data}`);
    }
}
const firstForm = new FirstAPI();
firstForm.save(new Form("John"));
const secondForm = new SecondAPI();
secondForm.save(new Form("John"));
