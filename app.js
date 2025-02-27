const express = require("express");
const nodemailer = require("nodemailer");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", contactRoutes);

app.listen(8080, () => console.log("Server running on port 8080"));
