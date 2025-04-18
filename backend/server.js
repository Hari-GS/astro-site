const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { log } = require("console");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST route
app.post("/send-email", upload.single("file"), async (req, res) => {
  const { name, email, message, phone, countryCode } = req.body;
  const file = req.file;

  const fullPhoneNumber = `${countryCode}${phone}`;
  console.log(fullPhoneNumber);
  
  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${fullPhoneNumber}
    Message: ${message}
    `,
    attachments: file
      ? [
          {
            filename: file.originalname,
            path: file.path,
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
