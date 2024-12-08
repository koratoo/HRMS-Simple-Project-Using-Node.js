const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const employeeRoutes = require("./routes/employees");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log("PostgreSQL connected..."))
  .catch((err) => console.error("Unable to connect to PostgreSQL:", err));

// Sync models with DB
sequelize.sync().then(() => {
  console.log("Database synchronized");
});

// Routes
app.use("/api/employees", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
