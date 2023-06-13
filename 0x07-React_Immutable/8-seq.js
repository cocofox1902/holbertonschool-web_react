import { Seq } from 'immutable';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function printBestStudents(grades) {
  const filteredGrades = Seq(grades).filter((student) => student.score >= 70);

  const formattedGrades = filteredGrades.map((student) => ({
    ...student,
    firstName: capitalizeFirstLetter(student.firstName),
    lastName: capitalizeFirstLetter(student.lastName),
  }));

  return formattedGrades.toJS();
}
