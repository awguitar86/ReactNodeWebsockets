const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive in everything I touch" }).status(200);
});

module.exports = router;
