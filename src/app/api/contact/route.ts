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

    // Basic Gibberish Detection
    const isGibberish = (text: string) => {
      if (!text) return false;
      const val = text.trim();
      
      // Check if any single word is longer than 20 characters
      const maxWordLength = Math.max(...val.split(/\s+/).map(w => w.length));
      if (maxWordLength > 20) return true;
      
      // Check for 6 or more consonants in a row (treats y as vowel for safety)
      if (/[bcdfghjklmnpqrstvwxz]{6,}/i.test(val)) return true;
      
      // Check for 5 or more of the same character in a row
      if (/(.)\1{4,}/.test(val)) return true;
      
      return false;
    };

    if (isGibberish(message) || isGibberish(subject) || isGibberish(firstName) || isGibberish(lastName)) {
      return NextResponse.json({ error: "Please enter valid text. Gibberish is not allowed." }, { status: 400 });
    }

    // 1. Send the email to the MUN Admin team
    const { data, error } = await resend.emails.send({
      from: 'CM Punjab MUN <no-reply@thecmpunjabmun.com>',
      to: ['thecmpunjabmun@gmail.com'], // The forwarding email
      replyTo: email, // This allows the MUN team to just hit "Reply" in Gmail and it goes to the user
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1e3c20;">New Message from the CM Punjab MUN Website</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>District:</strong> ${district}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        </div>
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
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #1e3c20; margin-bottom: 5px;">CM Punjab MUN</h2>
              <p style="color: #555; margin-top: 0;">Official Support Desk</p>
            </div>
            
            <p>Dear <strong>${firstName}</strong>,</p>
            
            <p>Thank you for contacting the Chief Minister Punjab Model United Nations (CM Punjab MUN). We are writing to confirm that we have successfully received your inquiry regarding <strong>"${subject}"</strong>.</p>
            
            <div style="background-color: #f5f8f5; border-left: 4px solid #1e3c20; padding: 15px; margin: 20px 0;">
              <p style="margin: 0;"><strong>What happens next?</strong><br/>
              Our central focal team is currently reviewing your message. We aim to respond to all administrative and application queries within 24 to 48 hours. If your request requires urgent attention, rest assured it has been flagged for priority review.</p>
            </div>
            
            <p>In the meantime, you may find answers to common questions in the FAQ section on our website.</p>
            
            <p>Best Regards,<br/>
            <strong>The CM Punjab MUN Team</strong></p>
            
            <hr style="border: 1px solid #eee; margin-top: 30px; margin-bottom: 20px;" />
            <p style="font-size: 12px; color: #888; text-align: center;">
              <em>This is an automated confirmation message to let you know we received your request. Please do not reply directly to this email.</em><br/>
              &copy; ${new Date().getFullYear()} CM Punjab MUN. All rights reserved.
            </p>
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
