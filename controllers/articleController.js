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
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createArticle,
};
