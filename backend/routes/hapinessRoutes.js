const express = require("express");
const router = express.Router();
const { sendRes } = require("../controllers/hapinessController");

router.route("/").post(sendRes);

module.exports = router;
