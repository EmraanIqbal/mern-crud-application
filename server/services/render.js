exports.homeRoute = (req, res) => {
  res.render("index", {users: "New Data"});
};

exports.addUser = (req, res) => {
  res.render("add_user");
};

exports.updateUser = (req, res) => {
  res.render("update_user");
};
