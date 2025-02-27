const express = require("express");
const router = express.Router();
require("dotenv").config();

const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "kaushikaditya90@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error sending message", error });
  }
});

module.exports = router;
