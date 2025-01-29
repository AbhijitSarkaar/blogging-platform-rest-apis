const express = require("express");
const router = express.Router();

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
router.get("/v1/articles", (req, res) => {
  res.send("articles");
});

module.exports = router;
