import { Buffer } from 'buffer';
import busboy from 'busboy';
import nodemailer from 'nodemailer';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const contentType = event.headers['content-type'] || event.headers['Content-Type'];
  if (!contentType.includes('multipart/form-data')) {
    return {
      statusCode: 400,
      body: 'Expected multipart/form-data',
    };
  }

  return new Promise((resolve, reject) => {
    const bb = busboy({
      headers: {
        'content-type': contentType,
      },
    });

    const fields = {};
    const files = {};

    bb.on('field', (fieldname, val) => {
      fields[fieldname] = val;
    });

    bb.on('file', (fieldname, file, { filename, encoding, mimeType }) => {
      const chunks = [];
      file.on('data', (data) => chunks.push(data));
      file.on('end', () => {
        files[fieldname] = {
          filename,
          mimeType,
          buffer: Buffer.concat(chunks),
        };
      });
    });

    bb.on('finish', async () => {
      const { name, email, message, phone } = fields;
      const uploadedFile = files.file;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
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
        attachments: uploadedFile
          ? [
              {
                filename: uploadedFile.filename,
                content: uploadedFile.buffer,
                contentType: uploadedFile.mimeType,
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        return resolve({
          statusCode: 200,
          body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
        });
      } catch (err) {
        console.error(err);
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ success: false, message: 'Failed to send email' }),
        });
      }
    });

    bb.on('error', (err) => {
      return reject({
        statusCode: 500,
        body: JSON.stringify({ success: false, message: err.message }),
      });
    });

    bb.end(Buffer.from(event.body, 'base64'));
  });
};
