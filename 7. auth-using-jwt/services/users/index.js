const router = require("express").Router();
const usersController = require("./controller");
const {checkAuthentication} = require("../../middlewares/auth");
const {admin} = require("../../middlewares/admin");

router.post("/create",usersController.create);

router.get("/",[checkAuthentication,admin],usersController.getAllUsers);
//router.get("/",usersController.getAllUsers);

//router.get("/getUser",usersController.getUser);


router.post("/login",usersController.login);

module.exports = router;


