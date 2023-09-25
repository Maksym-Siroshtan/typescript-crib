class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form): void {
    const res = this.fill(form); // Наполняем
    this.log(res); // Логируем
    this.send(res); // Отправляем
  }

  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(data);
  }
  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }
  protected send(data: string): void {
    console.log(`Отправляю ${data}`);
  }
}

class SecondAPI extends SaveForm<{ fio: string }> {
  protected fill(form: Form): { fio: string } {
    return { fio: form.name };
  }
  protected send(data: { fio: string }): void {
    console.log(`Отправляю ${data}`);
  }
}

const firstForm = new FirstAPI();
firstForm.save(new Form("John"));

const secondForm = new SecondAPI();
secondForm.save(new Form("John"));
