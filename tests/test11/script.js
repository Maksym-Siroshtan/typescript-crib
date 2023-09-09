"use strict";
/*
  Необходимо сделать тип для результата валидации формы, основываясь на типе формы
*/
const form = {
    name: "John",
    password: "123",
};
const formValidation = {
    name: { isValid: true },
    password: {
        isValid: false,
        errorMessage: "Пароль должен иметь не менее пяти символов",
    },
};
