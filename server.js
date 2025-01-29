const app = require("./app");
const swaggerDocs = require("./swagger");
const articleRoutes = require("./routes/articles");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  app.use("/", articleRoutes);
  swaggerDocs(app);
});
