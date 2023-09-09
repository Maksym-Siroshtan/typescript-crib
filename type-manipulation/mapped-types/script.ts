type Modifier = "create" | "update" | "read";

// Допустим мы получаем с сервера типы ролей к которым у юзера есть доступ, все они типа Modifier
// Но нам на фронте не нужен тип Modifier, нам просто нужно знать есть у юзера, тот или иной доступ
// Как же нам преобразовать похожие данные в другой тип ?
type UserRoles = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

// Решение 1. В ручную. Рабочий вариант, но если свойства на сервере изменятся, нам также прийдётся исправить их тут
type UserAccess = {
  customers?: boolean;
  projects?: boolean;
  adminPanel?: boolean;
};

// Решение 2. Маппинг. Теперь все получаемый свойства будут изменяться автоматически
// type ModifierToAccess<Type> = {
//   [Property in keyof Type]: boolean; // Изменили тип свойств Modifier на boolean
// };

type ModifierToAccess<Type> = {
  +readonly [Property in keyof Type as Exclude<
    `canAccess${string & Property}`,
    "canAccessadminPanel"
  >]-?: boolean;
  // -? сделать все свойства обязательными, +? наоборот
  // +readonly - сделать все свойства только для чтения
  // as `canAccess${string & Property}` добавить приставку canAccess к имени свойства
  // Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'> с помощью Exclude можем исключить ненужное на фронте свойство, например canAccessadminPanel
};

type UserAccess2 = ModifierToAccess<UserRoles>;
