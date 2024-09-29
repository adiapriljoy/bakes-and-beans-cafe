const { sequelize } = require("./models");
const populateCategory = require("./populate/populateCategory");
const populateCivilStatus = require("./populate/populateCivilStatus");
const populateDepartment = require("./populate/populateDepartment");
const populateEmployee = require("./populate/populateEmployee");
const populateEmployeeStatus = require("./populate/populateEmployeeStatus");
const populateItemStatus = require("./populate/populateItemStatus");
const populateNationality = require("./populate/populateNationality");
const populatePayment = require("./populate/populatePayment");
const populatePosition = require("./populate/populatePosition");
const populateUser = require("./populate/populateUser");
const populateUserRole = require("./populate/populateUserRole");
const populateUserStatus = require("./populate/populateUserStatus");

const setupDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({});

    await populateUserStatus();
    await populateUserRole();
    await populatePosition();
    await populatePayment();
    await populateNationality();
    await populateItemStatus();
    await populateEmployeeStatus();
    await populateDepartment();
    await populateCivilStatus();
    await populateCategory();
    await populateEmployee();
    await populateUser();

    console.log("Database created and populated with initial values.");
  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    await sequelize.close();
  }
};
setupDatabase();
