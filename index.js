const express = require("express");
const app = express();
const imageRouter = require("./image/router");
const authRouter = require("./auth/router");
const userRouter = require("./user/router");
const cors = require("cors");
const corsMiddleWare = cors();
const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();
const port = process.env.PORT || 4000;

app.use(corsMiddleWare);
app.use(bodyParserMiddleWare);

app.use(authRouter);
app.use(imageRouter);
app.use(userRouter);

app.listen(port, () => console.log(`listening to port ${port}`));
