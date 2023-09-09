/*
  Необходимо сделать тип для результата валидации формы, основываясь на типе формы
*/

interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: "John",
  password: "123",
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: {
    isValid: false,
    errorMessage: "Пароль должен иметь не менее пяти символов",
  },
};

type Validation<Form> = {
  // В нашей форме скажем что результат валидации свойств формы может быть {isValid: true}
  // или {isValid: false, errorMessage: string}
  [Key in keyof Form]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        errorMessage: string;
      };
};
