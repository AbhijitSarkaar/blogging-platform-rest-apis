const express = require("express");
const app = require("./app");
const swaggerDocs = require("./swagger");
const db = require("./config/db");
require("dotenv").config();

//connect to mongodb
db();

//json body parser
app.use(express.json());

//routes
require("./routes/articles")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  swaggerDocs(app);
});
