interface IRole10 {
  name: string;
}

interface IPermission10 {
  endDate: Date;
}

interface IUser10 {
  name: string;
  roles: IRole10[];
  permission: IPermission10;
}

const user10: IUser10 = {
  name: "John",
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

// Значения
const user10Name = user10["name"]; // John - получено значение
// let roleNames = 'roles' Error - Тип "IUser10" не содержит соответствующую сигнатуру индекса для типа "string"
// let roleNames: 'roles' = 'roles' Working...
const roleNames = "roles";

// Типы
type rolesType = IUser10["roles"]; // IRole[] - получен тип
// type rolesType2 = IUser10[rolesName]; Тип "rolesName" невозможно использовать как тип индекса.
type rolesType2 = IUser10[typeof roleNames]; // IRole[] - получен тип
type rolesType3 = IUser10["permission"]["endDate"]; // rolesType3 = Date

type roleType = IUser10["roles"][number]; // IRole - получен обобщённый тип ролей

// Получить union types из всех значений массива
// const roles = ["admin", "user", "super-user"]; roles: string[]
const roles = ["admin", "user", "super-user"] as const; // roles: readonly ["admin", "user", "super-user"]
// type roleTypes = typeof roles; roleTypes = readonly ["admin", "user", "super-user"]
type roleTypes = (typeof roles)[number]; // roleTypes = "admin" | "user" | "super-user"
