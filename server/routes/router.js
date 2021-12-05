const express = require("express");
const route = express.Router();

const services = require("../services/render");

route.get("/", services.homeRoute);

route.get("/add-user", services.addUser);
route.get("/update-user", (req, res) => {
  res.render("update_user");
});

module.exports = route;
