const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const router = new Router();

router.post(
  "/login",
  (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // console.log({ email, password });
    if (!email || !password) {
      res.status(400).send({
        message: "Please supply a valid email and password"
      });
    } else {
      res.send({
        jwt: toJWT({ userId: 1 })
      });
    }
  }
  // .catch(error => next(error))
);

module.exports = router;
