type PaymentPersistend2 = {
  id: number;
  sum: number;
  from: string;
  to: string;
};

type PaymentOmitExample = Omit<PaymentPersistend2, 'id'>; // Пропустить
// Omit пропустит свойство, в данном случае id
// PaymentOmitExample = {
//   sum: number;
//   from: string;
//   to: string;
// }
// Под капотом type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;


type PaymentRequisitsPickExample = Pick<PaymentPersistend2, 'from' | 'to'>; // Выбрать
// Pick выберет свойства, в данном случает from и to
// PaymentRequisitsPickExample = {
//   from: string;
//   to: string;
// }
// Под капотом type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// type ExtractExample = Extract<'from' | 'to' | PaymentOmitExample, string>;
// Извлечь строки, в данном случае ExtractExample = 'from' | 'to'
type ExtractExample = Extract<'from' | 'to' | PaymentOmitExample, PaymentOmitExample>; // Извлечь
// Извлечь PaymentOmitExample, в данном случае
// ExtractExample = {
//   sum: number;
//   from: string;
//   to: string;
// }
// Под капотом type Extract<T, U> = T extends U ? T : never;

type ExcludeExample = Exclude<'from' | 'to' | PaymentOmitExample, PaymentOmitExample>; // Исключить
// Исключить PaymentOmitExample, в данном случае
// ExcludeExample = "from" | "to"
// Под капотом type Exclude<T, U> = T extends U ? never : T
