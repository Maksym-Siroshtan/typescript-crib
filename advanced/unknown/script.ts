let input: unknown;
input = 3;
input = ["a", "b"];
//const resInput: string = input; //error

function f3(i: unknown) {
  if (typeof i === "number") {
    i++; // number
  } else {
    console.log(i); // unknown
  }
}

async function getPost(url: string) {
  try {
    await fetch(url);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

type U1 = unknown | string; // unknown
type I1 = unknown & string; // string
