const user = {
  firstname: "Maksym",
  surname: "Siroshtan",
  city: "Lubny",
  age: 31,
  skills: ["HTML", "CSS", "JS", "TS"],
};

const getFullUserName = (userEntity: {
  firstname: string;
  surname: string;
}): string => {
  return `${userEntity.firstname} ${userEntity.surname}`;
};
