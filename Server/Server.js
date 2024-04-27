require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;
// This may not be needed:
// const { User } = require("./user.js");
const { register, login } = require("./auth.js");

app.use(express.json());
app.use(cors());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware to handle Account POST requests
app.post("/register", register);
app.post("/login", login);

// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

// Commit ID of last saved changes:
// 8b354b558318620ecede6dbd7b45440de76fb889

// Imported Register and Login from Auth,
// Adjusted Header to include LogInPage route:
// c407637d64ab27ea8a23cbf00c91ac51a9d83c5d

// Use this code to go back:
// git reset --hard COMMITT_ID
