const express = require("express");
const cors = require("cors");
const authenticateToken = require('./middleware/authenticateToken');
const db = require("./models");
const app = express();

//Routers imports
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const payrollRoute = require("./routes/payrollRoute");

app.use(express.json());
app.use(cors());


//Routers
app.use("/auth", authRoute);
app.use("/users", authenticateToken, userRoute);
app.use("/payroll", authenticateToken, payrollRoute);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server runnning on port 3000");
  });
});
