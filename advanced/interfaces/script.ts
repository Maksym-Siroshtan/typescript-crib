interface IUser {
  firstname: string;
  surname: string;
  age: number;

  log: (id: number) => string;
}

interface IRole {
  roleId: number;
}

interface IUserWithRole extends IUser, IRole {
  createdAt: Date;
}

const userWithRole: IUserWithRole = {
  firstname: "John",
  surname: "Smith",
  age: 23,
  roleId: 1,
  createdAt: new Date(),
  log: (roleId) => {
    return `${roleId}`;
  },
};

interface IUserDic {
  // Может быть неограниченое число свойств, где индекс будет числом, а значение юзером
  [index: number]: IUser;
}
