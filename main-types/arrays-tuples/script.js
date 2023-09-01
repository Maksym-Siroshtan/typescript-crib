"use strict";
// Arrays
const colors = ["Red", "Green", "Blue"];
// const colorsOne: string[] = ["Red", "Green", "Blue", 1]; Type 'number' is not assignable to type 'string'.
const numbers = [1, 2, 3, 4, 5];
const skills = ["Dev", "DevOps", "Testing"];
for (let skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills
    .filter((s) => s !== "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
// Tuples
const userTuple = [1, "John"];
const userId = userTuple[0];
const userName = userTuple[1];
// userTuple[2] Tuple type '[number, string]' of length '2' has no element at index '2'.
userTuple.push(2); // ТS не запретит нам например запушить элемент, но обратиться мы к нему не можем
// userTuple[2] Tuple type '[number, string]' of length '2' has no element at index '2'.
userTuple.pop(); // Working...
// Destructurization
const [id, firstname] = userTuple;
const array = [1, "John", true, false, true];
// Readonly
const userTupleOnlyReadTuples = [1, "John"];
// userTupleOnlyRead.push(2); Property 'push' does not exist on type 'readonly [number, string]'.
//  userTupleOnlyRead[0] = 2
const colorsOnlyReadArray = ["Red", "Green", "Blue"];
// colorsOnlyReadArray[1] = 'Black'; Index signature in type 'readonly string[]' only permits reading.
const colorsOnlyReadArrayG = ["Red", "Green", "Blue"];
