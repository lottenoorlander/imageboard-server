const { Router } = require("express");
const Image = require("./model");
router = new Router();

router.get("/image", (req, res, next) =>
  Image.findAll()
    .then(images => res.send(images))
    .catch(error => next(error))
);

router.post("/image", (req, res, next) =>
  Image.create(req.body)
    .then(image => res.send(image))
    .catch(error => next(error))
);

module.exports = router;
