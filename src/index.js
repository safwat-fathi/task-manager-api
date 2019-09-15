const express = require("express");
require("./db/mongoose"); // Just loading our mongoose connection to DB
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parse the incoming json data
app.use(userRouter); // connect to user routers
app.use(taskRouter); // connect to task routers

app.listen(port, () => {
  console.log(`Server is up & runing on ${port}`);
});
