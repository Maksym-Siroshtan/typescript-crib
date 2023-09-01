function logId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id.toLowerCase()); // string
  } else if (typeof id === "number") {
    console.log(id.toFixed(2)); // number
  } else {
    console.log(id); // boolean
  }
}

function logErr(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err); // array
  } else {
    console.log(err); // string
  }
}

function logObj(obj: { a: string } | { b: string }) {
  if ("a" in obj) {
    console.log(obj.a); // obj.a
  } else {
    console.log(obj.b); // obj.b
  }
}

function logAorB(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log(a); // string
  } else {
    console.log(b); // string | boolean
  }
}
