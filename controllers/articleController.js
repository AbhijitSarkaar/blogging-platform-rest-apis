const Article = require("../models/Article");

const createArticle = async (req, res) => {
  const { title, content } = req.body;
  const article = new Article({
    title,
    content,
  });

  try {
    const result = await article.save();

    res.status(201).send({
      message: "Article created",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      error: err,
    });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).json({
      data: articles,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const getArticle = async (req, res) => {
  const articleId = req.params.id;
  console.log(articleId);
  try {
    const article = await Article.findById(articleId);
    res.status(200).json({
      data: article,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await Article.findOne({
      _id: req.params.id,
    });

    article.set("title", req.body.title);
    article.set("content", req.body.content);

    await article.save().then((data) => {
      res.status(200).json({
        data,
      });
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Article deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticle,
  updateArticle,
  deleteArticle,
};
