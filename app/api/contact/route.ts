import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"${name}" <contact@3ixl.com>`,
      to: "contact@3ixl.com",
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: message,
    });

    return NextResponse.json(
      { success: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}