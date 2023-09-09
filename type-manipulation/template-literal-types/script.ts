// Обычно Template Literals Types используется для создания из union типов,
// и допустим каких-то частей текста и модификаторов нового union типа
// или для миксов разных типов в один union тип

type ReadOrWrite = "read" | "write"; // Можем читать, можем писать
type Bulk = "bulk" | ""; // массово читать, массово писать

// type Access = `can${Uppercase<ReadOrWrite>}`; // Access = "canREAD" | "canWRITE"
// type Access = `can${Capitalize<ReadOrWrite>}`; // Access = "canRead" | "canWrite"
type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;
// Access = "canRead" | "canReadBulk" | "canWrite" | "canWriteBulk"

// Вытянуть типы без приставки can. Для этого используем infer в той части литерала, которую хотим вытянуть
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type T = ReadOrWriteBulk<Access>; // T = "Read" | "Write" | "ReadBulk" | "WriteBulk"

// Реальный пример
type ErrorOrSuccess = "error" | "success";

type ResponseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`;
};

const response: ResponseT = {
  result: "httpSuccess",
};
