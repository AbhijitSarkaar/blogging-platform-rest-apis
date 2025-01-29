const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
