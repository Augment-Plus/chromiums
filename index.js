const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { init } = require("./core");

const router = require("./router");

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await init();
  console.log(`Server listening on port ${PORT}`);
});
