const { Router } = require("express");
const Image = require("./model");
router = new Router();

router.get("/image", (req, res, next) =>
  Image.findAll()
    .then(images => res.send(images))
    .catch(error => next(error))
);

module.exports = router;
