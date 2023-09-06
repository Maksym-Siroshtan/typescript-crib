"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
// const resp = new Resp("data"); Resp<string, unknown> без явного указания типов в generic у непереданного аргумента получим unknown
const resp = new Resp("data");
// class HttpResponse extends Resp<D, E>  Error Не удается найти имя "D" Не удается найти имя "E"
class HttpResponse extends Resp {
    setCode(code) {
        this.code = code;
    }
}
// new HttpResponse() Наследование от Resp отлично работает
