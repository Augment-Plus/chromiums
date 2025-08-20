const express = require("express");

const controller = require("../controller");

const APIRouter = require("./api");

const router = express.Router();

router.use('/api', APIRouter)
router.get("/", controller.home);

module.exports = router;
