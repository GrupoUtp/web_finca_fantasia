const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(5000, () => {
    console.log("Escuchando en puerto 5000");
});