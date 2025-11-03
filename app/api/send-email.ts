
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

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
    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 });
  }
}
