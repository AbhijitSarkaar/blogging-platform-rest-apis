const app = require("./app");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log("listening to port ", process.env.PORT);
});
