const express = require("express");
const app = express();
const PORT = process.env.PORT;
const shoesRoutes = require("./Routes/Shoes");
const storesRoutes = require("./Routes/Stores");
app.use(express.json());
const cors = require("cors");

app.use(cors());

app.use("/api/shoes", shoesRoutes);
app.use("/api/stores", storesRoutes);

app.listen(PORT || 8080, () => {
  console.log(`Express is running on port ${PORT || 8080}`);
});
