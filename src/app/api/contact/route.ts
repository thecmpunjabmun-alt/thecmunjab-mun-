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

    // 1. Send the email to the MUN Admin team
    const { data, error } = await resend.emails.send({
      from: 'CM Punjab MUN <no-reply@thecmpunjabmun.com>',
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
      console.error("Resend API Error (Admin):", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 2. Send an automated confirmation email to the user
    try {
      await resend.emails.send({
        from: 'CM Punjab MUN <no-reply@thecmpunjabmun.com>',
        to: [email],
        subject: `Thank you for contacting CM Punjab MUN`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2>Hello ${firstName},</h2>
            <p>Thank you for reaching out to CM Punjab MUN. We have received your message regarding <strong>"${subject}"</strong>.</p>
            <p>Our team will look into your query and get back to you as soon as possible.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>The CM Punjab MUN Team</strong></p>
            <hr style="border: 1px solid #eee; margin-top: 30px;" />
            <p style="font-size: 12px; color: #888;"><em>You are receiving this automated email because you filled out the contact form on our official website (thecmpunjabmun.com).</em></p>
          </div>
        `,
      });
    } catch (autoReplyErr) {
      console.error("Resend API Error (AutoReply):", autoReplyErr);
      // We don't return an error here because the main goal (sending to admin) succeeded.
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
