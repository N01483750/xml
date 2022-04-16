const { getAllStudents, getStudentById } = require("./api/controller/student");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id, first_name, last_name, contact_number, email, department, university, city, state}) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${contact_number}</td>
        <td>${email}</td>
        <td>${department}</td>
        <td>${university}</td>
        <td>${city}</td>
        <td>${state}</td>
        </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAllStudents().then(({ data }) => renderTable(data));  
    
    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.filters.value;
      const semester = event.target.filters_semester_name;
      const gender = event.target.gender.value;
      const valueTerm = event.target.input.value;
      
      if(term === `id`) {
        getStudentById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllStudents(term, gender, semester.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllStudents().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);