const express = require("express");
const route = express.Router();
// import { Router } from "express";
// const route = Router();
const controller = require("../controller/controller");

const services = require("../services/render");

route.get("/", services.homeRoute);
route.get("/add-user", services.addUser);
route.get("/update-user", services.updateUser);

// Api
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
