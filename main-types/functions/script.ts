function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameTwo = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};

// Function overloads
function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
  if (typeof distance === "number") {
    return 1;
  } else {
    return "";
  }
}
