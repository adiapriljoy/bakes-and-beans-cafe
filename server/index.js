const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const userRouter = require("./routes/User");
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server runnning on port 3000");
  });
});
