const express = require("express");
const { json } = require("body-parser");
const port = 3003;

const app = express();
app.use(json());

app.listen(port, () => console.log("listening right here man"));
