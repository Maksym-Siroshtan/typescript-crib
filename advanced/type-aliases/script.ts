type httpMethod = "post" | "get";

function fetchWithTypeAliasesMethod(url: string, method: httpMethod) {
  console.log(method);
}

const userTwo: {
  firstname: string;
  surname: string;
} = {
  firstname: "Maksim",
  surname: "Siroshtan",
};

type UserThree = {
  firstname: string;
  surname: string;
};

type UserThreeAge = {
  age: number;
};

type UserThreeWithAge = UserThree & UserThreeAge;

const userThree: UserThreeWithAge = {
  firstname: "Maksim",
  surname: "Siroshtan",
  age: 31,
};
