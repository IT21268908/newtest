const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectDb } = require("./config/db");
const inventory = require("./routes/inventory_route");
const app = express();
const path = require("path");
const port = process.env.PORT || 8022;

app.use("/api/content", express.static(path.join(__dirname, "./images")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDb();
app.use("/api/inventory", inventory);

// Handle 500 or other status errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    message: error.message || "Internal Server Error",
  });
});

app.listen(port, console.log(`Server started on port ${port}`));
