const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// Set View engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

// Load Assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// css/style.css THis is used to load the folder which we created inside css folder i assets
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load routers
app.use("/", require("./server/routes/router"));
// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/add-user", (req, res) => {
//   res.render("add_user");
// });

// app.get("/update-user", (req, res) => {
//   res.render("update_user");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
