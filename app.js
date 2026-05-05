const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/user");

const authRoutes = require("./routes/auth");
const reviewRoutes = require("./routes/reviews");

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/reviewApp");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use("/", require("./routes/auth"));
app.use("/reviews", require("./routes/reviews"));

app.get("/", (req, res) => {
  res.redirect("/reviews");
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port ",PORT);
})
