
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // your gmail account
        pass: process.env.GMAIL_PASSWORD, // your gmail password
      },
    });

    // Set up email data
    let mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: 'kamalhussaintappa09@gmail.com', // list of receivers
      subject: 'New message from your portfolio contact form', // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    };

    // Send mail with defined transport object
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending message.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
