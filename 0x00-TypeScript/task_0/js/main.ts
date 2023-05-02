interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "",
    lastName: "",
    age: 0,
    location: "",
};

const student2: Student = {
    firstName: "",
    lastName: "",
    age: 0,
    location: "",
};

const studentsList: Student[] = [student1, student2];

const table = document.getElementById("students-table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});
