const express = require("express");
const router = express.Router();

const path = require("path");
const formData = path.join(__dirname, "../Data/Stores.json");
router.use(express.json());
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(formData, (err, data) => {
    let storesInfo = JSON.parse(data);
    res.json(storesInfo);
    if (err) console.log(err);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(formData, (err, data) => {
    let storesInfo = JSON.parse(data);
    let storeId = req.params.id;
    const finder = storesInfo.find((shoe) => shoe.id == storeId);
    res.json(finder);
    console.log(finder);
  });
});
module.exports = router;
