const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const shoesRoutes = require("./Routes/Shoes");
const storesRoutes = require("./Routes/Stores");
app.use(express.json());
const cors = require("cors");
app.use(express.static("public"));
app.use(cors());

app.use("/api/shoes", shoesRoutes);
app.use("/api/stores", storesRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
