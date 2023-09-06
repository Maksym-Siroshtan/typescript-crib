class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }
    if (error) {
      this.error = error;
    }
  }
}

// const resp = new Resp("data"); Resp<string, unknown> без явного указания типов в generic у непереданного аргумента получим unknown
const resp = new Resp<string, number>("data");

// class HttpResponse extends Resp<D, E>  Error Не удается найти имя "D" Не удается найти имя "E"
class HttpResponse<F> extends Resp<string, number> {
  // Working...
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

// new HttpResponse() Наследование от Resp отлично работает
