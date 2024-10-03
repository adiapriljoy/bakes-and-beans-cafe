const express = require("express");
const app = express();
const cors = require("cors");
const authenticateToken = require('./middleware/authenticateToken');

//Routers imports
const userRouter = require("./routes/User");
const authRouter = require("./routes/Authentication");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
app.use("/auth", authRouter);
app.use("/users", authenticateToken, userRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server runnning on port 3000");
  });
});
