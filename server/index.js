const express = require("express");
const app = express();
const PORT = process.env.PORT;
const shoesRoutes = require("./Routes/Shoes");
const storesRoutes = require("./Routes/Stores");
const path = require("path");
app.use(express.json());
const cors = require("cors");
app.use(express.static("public"));
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}
app.use("/api/shoes", shoesRoutes);
app.use("/api/stores", storesRoutes);

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
app.listen(PORT || 8080, () => {
  console.log(`Express is running on port ${PORT || 8080}`);
});
