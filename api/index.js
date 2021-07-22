require("dotenv").config();
const express = require('express')
const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
    res.send("oke")
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))