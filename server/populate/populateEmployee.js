const { Employee } = require("../models");

const populateEmployee = async () => {
  const employees = [
    { 
        emp_fname: "April Joy",
        emp_lname: "Adi",
        emp_mname: "Advincula",
        emp_suffix: null,
        emp_dob: "2000-04-13",
        emp_gender: "Female",
        emp_email: "adijoyworks@gmail.com",
        emp_contact: "+639389040578",
        nationality_id: 1,
        civil_status_id: 1,
        dept_id: 1,
        position_id: 1,
        emp_status_id: 1,
        date_hire: "2020-01-13",
    },
  ];

  for (const employee of employees) {
    await Employee.findOrCreate({
      where: { 
        emp_fname: employee.emp_fname,
        emp_lname: employee.emp_lname,
        emp_mname: employee.emp_mname,
        emp_suffix: employee.emp_suffix,
        emp_dob: employee.emp_dob,
        emp_gender: employee.emp_gender,
        emp_email: employee.emp_email,
        emp_contact: employee.emp_contact,
        nationality_id: employee.nationality_id,
        civil_status_id: employee.civil_status_id,
        dept_id: employee.dept_id,
        position_id: employee.position_id,
        emp_status_id: employee.emp_status_id,
        date_hire: employee.date_hire,
      },
      defaults: employee,
    });
  }

  console.log("Database populated with employees.");
};

module.exports = populateEmployee;
