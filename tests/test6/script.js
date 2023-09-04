"use strict";
class AbsLogger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyAbsLogger extends AbsLogger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const myAbsLogger = new MyAbsLogger();
myAbsLogger.logWithDate("Метод logWithDate выводит в консоль дату и данное текстовое сообщение");
