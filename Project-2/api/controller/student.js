const students = require("../data/data.json");

const getAllStudents = (term, gender, semester, valueTerm ) =>
      new Promise((resolve) => {
        let data = students;

    if(term) {

        switch(term) {
            case "first_name":
                    data = data.filter(({first_name}) => first_name.toLowerCase().includes(valueTerm));
                    break;
                case "last_name":
                    data = data.filter(({last_name}) => last_name.toLowerCase().includes(valueTerm));
                    break;
                case "contact_number":
                    data = data.filter(({contact_number}) => contact_number.toLowerCase().includes(valueTerm));
                    break;
                case "email":
                    data = data.filter(({email}) => email.toLowerCase().includes(valueTerm));
                    break;
                case "department":
                    data = data.filter(({department}) => department.toLowerCase().includes(valueTerm));
                    break;
                case "university":
                    data = data.filter(({university}) => university.includes(valueTerm));
                    break;
                case "city":
                    data = data.filter(({city}) => city.toLowerCase().includes(valueTerm));
                    break;  
                case "state":
                    data = data.filter(({state}) => state.toLowerCase().includes(valueTerm));
                    break;  
                default:
                    // do nothing
                    break;
        }
    }

    // check gender
    if(gender && gender != "other") {
        gender = (gender == "male") ? male : female;
        data = data.filter(({is_male}) => gender === is_male);
    }

    // check education
        //if(card_type && card_type.length > 0) {
           // let cards = [];
           // card_type.map((card) => {
             //   cards.push(...data.filter((data) => card == data.card_type));
            //})
            //data = cards;
        //}
        
        // filter cost range
        //if (cost_from && cost_from != "" && cost_to && cost_to != "") {
        //    data = data.filter(({material_rate}) => Number(material_rate.replace("$","")) >= Number(cost_from) && Number(material_rate.replace("$","")) <= Number(cost_to));
        //}
    
    // filter by material type
    if(semester && semester != "none") {
        data = data.filter(({semester_number}) => semester_number.toLowerCase() === semester);
    }
    
    resolve({ data: data });
  });

  const getStudentById = (studentId) =>
  new Promise((resolve) => {
    const student = students.find(({id}) => id === Number(studentId));

    if (student) {
        resolve({data: Array(student) });
    } else {
        resolve({
            data: { message: `No student found for id ${id}` },
        });
    }
  });

  module.exports = {
    getAllStudents,
    getStudentById,
  };