const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateArticle:
 *      type: object
 *      required:
 *        - title
 *        - content
 *      properties:
 *        title:
 *          type: string
 *          default: article title
 *        content:
 *          type: content
 *          default: article content
 *
 */

const articleSchema = Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
