const axios = require("axios");

exports.homeRoute = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      console.log("object::", response.data);
      res.render("index", { users: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.addUser = (req, res) => {
  res.render("add_user");
};

exports.updateUser = (req, res) => {
  res.render("update_user");
};
