const express = require("express");
const cors = require("cors");
const db = require("./src/config/db");
require("dotenv").config();

const routes = require("./src/router");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));

