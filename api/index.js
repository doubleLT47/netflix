require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const PORT = 5000 || process.env.PORT;

const route = require('./routes');
const db = require('./db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan('combined'))

db.connect();
route(app)

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))