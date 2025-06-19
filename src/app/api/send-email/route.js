// app/api/send-email/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../utils/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = "mvp.aiceo@gmail.com";

export async function POST(req) {
  const { email } = await req.json();
console.log("email",email)
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "hello@youraimvp.com",
      to: email,
      subject: "🎉 Welcome to MVP.ai!",
      html: EmailTemplate({ values: { email, isAdmin: false } }),
    });

    await resend.emails.send({
      from: "hello@youraimvp.com",
      to: SENDER_EMAIL,
      subject: "🚨 New User Signup on MVP.ai",
      html: EmailTemplate({ values: { email, isAdmin: true } }),
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
