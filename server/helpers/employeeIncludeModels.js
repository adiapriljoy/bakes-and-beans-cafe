const {
  EmployeeStatus,
  Position,
  CivilStatus,
  Nationality,
  Department,
} = require("../models");

module.exports = [
  {
    model: Nationality,
    as: "nationality",
    attributes: ["nationality_desc"],
  },
  {
    model: CivilStatus,
    as: "civilStatus",
    attributes: ["civil_status_desc"],
  },
  {
    model: Department,
    as: "department",
    attributes: ["department_desc"],
  },
  {
    model: Position,
    as: "position",
    attributes: ["position_desc"],
  },
  {
    model: EmployeeStatus,
    as: "employmentStatus",
    attributes: ["emp_status_desc"],
  },
];
