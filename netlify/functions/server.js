const nodemailer = require("nodemailer");
const formidable = require("formidable");
const fs = require("fs");
require("dotenv").config();

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({ keepExtensions: true });

    form.parse(event, async (err, fields, files) => {
      if (err) {
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ success: false, message: "Error parsing form" }),
        });
      }

      const { name, email, message, phone } = fields;
      const file = files.file;

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
        Phone: ${phone}
        Message: ${message}
        `,
        attachments: file
          ? [
              {
                filename: file.originalFilename,
                path: file.filepath,
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        return resolve({
          statusCode: 200,
          body: JSON.stringify({ success: true, message: "Email sent successfully" }),
        });
      } catch (error) {
        console.error(error);
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ success: false, message: "Failed to send email" }),
        });
      }
    });
  });
};
