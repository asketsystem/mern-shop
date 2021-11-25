const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://mernapi:mernapi@cluster0.vg0x5.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then(() => console.log("DBConnection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.listen(5000, () => {
    console.log("Backend server is running!");
});