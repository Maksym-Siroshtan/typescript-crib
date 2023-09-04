abstract class AbsLogger {
  abstract log(message: string): void;

  printDate(date: Date): void {
    this.log(date.toString());
  }
}

class MyAbsLogger extends AbsLogger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}

const myAbsLogger = new MyAbsLogger();
myAbsLogger.logWithDate(
  "Метод logWithDate выводит в консоль дату и данное текстовое сообщение"
);
