const router = require("express").Router();
const usersRoute  = require("../services/users/index");
const homeRoute = require("./home");
router.use("/",homeRoute);
router.use("/users",usersRoute);

module.exports = router;