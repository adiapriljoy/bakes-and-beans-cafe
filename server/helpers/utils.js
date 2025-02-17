const {
  Nationality,
  CivilStatus,
  Department,
  Position,
  EmploymentStatus,
} = require("../models");

async function getNationalityId(nationalityDesc) {
  const nationality = await Nationality.findOne({
    where: { nationality_desc: nationalityDesc },
  });
  return nationality ? nationality.nationality_id : null;
}

async function getCivilStatusId(civilStatusDesc) {
  const civilStatus = await CivilStatus.findOne({
    where: { civil_status_desc: civilStatusDesc },
  });
  return civilStatus ? civilStatus.civil_status_id : null;
}

async function getDepartmentId(departmentDesc) {
  const department = await Department.findOne({
    where: { department_desc: departmentDesc },
  });
  return department ? department.dept_id : null;
}

async function getPositionId(positionDesc) {
  const position = await Position.findOne({
    where: { position_desc: positionDesc },
  });
  return position ? position.position_id : null;
}

async function getEmploymentStatusId(statusDesc) {
  const status = await EmploymentStatus.findOne({
    where: { employment_status_desc: statusDesc },
  });
  return status ? status.employment_status_id : null;
}

module.exports = {
  getNationalityId,
  getCivilStatusId,
  getDepartmentId,
  getPositionId,
  getEmploymentStatusId,
};
