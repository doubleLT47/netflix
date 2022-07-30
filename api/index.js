const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const route = require("./routes");
const db = require("./db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

db.connect();
route(app);

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
