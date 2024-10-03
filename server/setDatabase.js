const { sequelize } = require("./models");
const populateFunctions = [
  require("./populate/populateCategory"),
  require("./populate/populateCivilStatus"),
  require("./populate/populateDepartment"),
  require("./populate/populatePosition"),
  require("./populate/populateEmployeeStatus"),
  require("./populate/populateItemStatus"),
  require("./populate/populateNationality"),
  require("./populate/populatePayment"),
  require("./populate/populateUserRole"),
  require("./populate/populatePhilHealth"),
  require("./populate/populateSSS"),
  require("./populate/populateUserStatus"),
  require("./populate/populateEmployee"),
  require("./populate/populateUser"),
];

const setupDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({});

    for (const populate of populateFunctions) {
      await populate();
    }

    console.log("Database created and populated with initial values.");
  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    await sequelize.close();
  }
};
setupDatabase();
