const express = require("express");
const router = express.Router();
const formData = "../Data/Shoes.json";
router.use(express.json());
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(formData, (err, data) => {
    if (err) console.log(err);
    let shoes = JSON.parse(data);
    res.json(shoes);
  });
});
module.exports = router;
