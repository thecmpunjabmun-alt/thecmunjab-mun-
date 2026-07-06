import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, district, subject, message } = body;

    // Validate inputs
    if (!firstName || !lastName || !email || !district || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'CM Punjab MUN <no-reply@thecmpunjabmun.com>', // Since the domain is verified, this should work. Otherwise Resend defaults to onboarding@resend.dev but we will assume domain is verified as per user message.
      to: ['thecmpunjabmun@gmail.com'], // The forwarding email
      replyTo: email, // This allows the MUN team to just hit "Reply" in Gmail and it goes to the user
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from the CM Punjab MUN Website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>District:</strong> ${district}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
