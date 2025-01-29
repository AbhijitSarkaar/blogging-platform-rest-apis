const { createArticle } = require("../controllers/articleController");

module.exports = (app) => {
  /**
   * @openapi
   *
   * /v1/articles:
   *  get:
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/v1/articles", (req, res) => {
    res.send("articles");
  });

  app.post("/v1/articles", createArticle);
};
