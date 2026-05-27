import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const name = String(body.name || "");
  const phone = String(body.phone || "");
  const email = String(body.email || "");
  const message = String(body.message || "");

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const emailBody = `
New quote request from Marko Secure website

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Message:
${message}
`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Marko Secure <quotes@markosecure.com>",
      to: "info@markosecure.com",
      subject: "New fencing quote request",
      text: emailBody,
      reply_to: email || undefined,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}