const express = require("express");
const path = require("path");
const members = require("./members");
const logger = require("./middleware/logger");

const app = express();

// Init middleware
app.use(logger);

// Gets All Members
app.get("/api/members", (req, res) => res.json(members));

// Set a static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
