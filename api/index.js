const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./DB");
const app = express();
const userRoute = require("./Routes/users.js");
const authRoute = require("./Routes/auth.js");

//connect to DB
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

//server
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
