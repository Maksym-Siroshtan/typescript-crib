function isString(id: string | number): id is string {
  return typeof id === "string";
}

interface IStudent {
  name: string;
  age: number;
  course: string;
}

interface IProfessor extends IStudent {
  isProfessor: boolean;
}

type StudentOrProfessor = IStudent | IProfessor;

function getProfessor(persone: StudentOrProfessor): persone is IProfessor {
  return "isProfessor" in persone;
}

function getProfessorAlternative(
  persone: StudentOrProfessor
): persone is IProfessor {
  return (persone as IProfessor).isProfessor !== undefined;
}

function setProfessorTrue(persone: StudentOrProfessor) {
  if (getProfessorAlternative(persone)) {
    persone.isProfessor = true;
  } else {
    throw new Error("Этот человек не профессор!");
  }
}
