const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const shoesRoutes = require("./Routes/Shoes");
const storesRoutes = require("./Routes/Stores");
app.use(express.json());
const cors = require("cors");
app.use(express.static("public"));
app.use(cors());

app.use("/api/shoes", shoesRoutes);
app.use("/api/stores", storesRoutes);

app.listen(process.env.PORT || 8080, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
