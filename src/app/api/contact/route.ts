import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input too long." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    const { error: sendError } = await resend.emails.send({
      from: "coreyeudell.com <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      replyTo: trimmedEmail,
      subject: `Contact form: ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        ``,
        `Message:`,
        trimmedMessage,
      ].join("\n"),
    });

    if (sendError) {
      console.error("[contact] Resend error:", sendError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
