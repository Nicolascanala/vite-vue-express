const asyncHandler = require("express-async-handler");

// @desc    Send Res
// @route   POST /api
// @access  Public
const sendRes = asyncHandler(async (req, res) => {
  if (req.body.mood === 1) {
    return res
      .status(200)
      .json({ name: "Super Sad", mssg: "You grumpy old bastard!" });
  }
  if (req.body.mood === 2) {
    return res.status(200).json({ name: "Sad", mssg: "Didn't sleep well?" });
  }
  if (req.body.mood === 3) {
    return res.status(200).json({ name: "Neutral", mssg: "Apathic?" });
  }
  if (req.body.mood === 4) {
    return res
      .status(200)
      .json({ name: "Happy", mssg: "Always nice to see you smile" });
  }
  if (req.body.mood === 5) {
    return res.status(200).json({ name: "Super Happy", mssg: "Yeeboiii" });
  }
  res.status(200).json(req.body);
});

module.exports = {
  sendRes,
};
