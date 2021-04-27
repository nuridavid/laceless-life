const express = require("express");
const router = express.Router();
const path = require("path");
const formData = path.join(__dirname, "../Data/Shoes.json");
router.use(express.json());
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(formData, (err, data) => {
    let shoesInfo = JSON.parse(data);
    res.json(shoesInfo);
    if (err) console.log(err);
  });
});
router.get("/:id", (req, res) => {
  fs.readFile(formData, (err, data) => {
    let shoesInfo = JSON.parse(data);
    let shoeId = req.params.id;
    const finder = shoesInfo.find((shoe) => shoe.id == shoeId);
    res.json(finder);
    console.log(finder);
  });
});
module.exports = router;
