const express = require("express");
const router = express.Router();
const formData = "../Data/Stores.json";
router.use(express.json());
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(formData, (err, data) => {
    if (err) console.log(err);
    let stores = JSON.parse(data);
    res.json(stores);
  });
});
module.exports = router;
