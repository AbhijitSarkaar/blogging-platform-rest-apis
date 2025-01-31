const {
  createArticle,
  getAllArticles,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

module.exports = (app) => {
  /**
   * @openapi
   *
   * /v1/articles:
   *  get:
   *     tags:
   *     - Article
   *     description: GET list of all articles
   *     responses:
   *      200:
   *        description: GET /v1/article is up and running
   *      400:
   *        description: Client Bad request
   *      500:
   *        description: Internal Server Error
   */
  app.get("/v1/articles", getAllArticles);

  /**
   * @openapi
   *
   * /v1/articles:
   *  post:
   *     tags:
   *     - Article
   *     description: Create a new article
   *     requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/CreateArticle"
   *     responses:
   *       201:
   *        description: POST /v1/articles is up and running
   *
   */
  app.post("/v1/articles", createArticle);

  /**
   * @openapi
   *
   * /v1/articles/{id}:
   *  get:
   *     tags:
   *     - Article
   *     description: Get a article using id
   *     parameters:
   *      - name: id
   *        in: path
   *        description: article id
   *        required: true
   *     responses:
   *      200:
   *        description: GET /v1/articles/{id} is up and running
   *      400:
   *        description: Client Bad request
   *      500:
   *        description: Internal Server Error
   */
  app.get("/v1/articles/:id", getArticle);

  /**
   * @openapi
   *
   * /v1/articles/{id}:
   *  patch:
   *     tags:
   *     - Article
   *     description: Update an article using id
   *     parameters:
   *      - name: id
   *        in: path
   *        description: article id
   *        required: true
   *     requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/CreateArticle"
   *     responses:
   *       200:
   *        description: PATCH /v1/articles/{id} is up and running
   */
  app.patch("/v1/articles/:id", updateArticle);

  /**
   * @openapi
   *
   * /v1/articles/{id}:
   *  delete:
   *     tags:
   *     - Article
   *     description: Delete an article using id
   *     parameters:
   *      - name: id
   *        in: path
   *        description: article id
   *        required: true
   *     responses:
   *      200:
   *        description: DELETE /v1/articles/{id} is up and running
   */
  app.delete("/v1/articles/:id", deleteArticle);
};
