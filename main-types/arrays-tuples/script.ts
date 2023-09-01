// Arrays
const colors: string[] = ["Red", "Green", "Blue"];
// const colorsOne: string[] = ["Red", "Green", "Blue", 1]; Type 'number' is not assignable to type 'string'.
const numbers: number[] = [1, 2, 3, 4, 5];

const skills: string[] = ["Dev", "DevOps", "Testing"];

for (let skill of skills) {
  console.log(skill.toLowerCase());
}

const result = skills
  .filter((s: string) => s !== "DevOps")
  .map((s) => s + "! ")
  .reduce((a, b) => a + b);

// Tuples
const userTuple: [number, string] = [1, "John"];
const userId = userTuple[0];
const userName = userTuple[1];

// userTuple[2] Tuple type '[number, string]' of length '2' has no element at index '2'.
userTuple.push(2); // ТS не запретит нам например запушить элемент, но обратиться мы к нему не можем
// userTuple[2] Tuple type '[number, string]' of length '2' has no element at index '2'.
userTuple.pop(); // Working...

// Destructurization
const [id, firstname] = userTuple;

const array: [number, string, ...boolean[]] = [1, "John", true, false, true];
