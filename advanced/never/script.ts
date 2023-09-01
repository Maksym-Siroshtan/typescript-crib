function createError(message: string): never {
  throw new Error(message);
}

function n1(): never {
  while (true) {}
}

function recursy(): never {
  recursy();
}

type Direction = "Vertical" | "Horizontal"; // | "Down"
const arrow: Direction = "Horizontal";

function checkDirection(action: Direction) {
  switch (action) {
    case "Horizontal":
      console.log(action);
      break;
    case "Vertical":
      console.log(action);
      break;
    default:
      const _: never = action; // Down будет пойман
      console.log("Error");
  }
}
