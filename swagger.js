const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blogging Platform API",
      description: "API documentation for blogging platform service",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
      {
        url: "https://blogging-platform-rest-apis.onrender.com",
        description: "Production server",
      },
    ],
  },
  apis: ["./routes/articles.js", "./models/Article.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
