const router = require("express").Router();
const controller = require("./controller");

router.get("/predict", controller.predictEmail);

module.exports = router;