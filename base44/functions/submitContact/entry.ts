import { secrets } from 'base44:runtime';

const OWNER_EMAIL = 'ns50@dipakpatel.site';
const SENDER = 'Drishte Infotech <onboarding@resend.dev>';

export default async function(req) {
  try {
    const body = await req.json();
    const { name, email, company, type, details } = body;

    // Basic validation
    if (!name || !email || !type || !details) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }
    // Length limits to prevent abuse
    if (details.length > 5000 || name.length > 200) {
      return Response.json({ error: 'Message too long.' }, { status: 400 });
    }

    const apiKey = secrets.get("RESEND_API_KEY");
    if (!apiKey) {
      return Response.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const subject = `New inquiry from ${name}${company ? ` (${company})` : ''}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b;">
        <h2 style="margin:0 0 20px 0;color:#0f172a;">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
          <tr><td style="padding:8px 0;font-weight:600;width:120px;vertical-align:top;color:#64748b;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;vertical-align:top;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:600;vertical-align:top;color:#64748b;">Company</td><td style="padding:8px 0;">${company || '—'}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;vertical-align:top;color:#64748b;">Project Type</td><td style="padding:8px 0;">${type}</td></tr>
        </table>
        <h3 style="margin:24px 0 8px 0;font-size:14px;color:#64748b;">Project Details</h3>
        <p style="margin:0;padding:16px;background:#f8fafc;border-radius:8px;white-space:pre-wrap;font-size:14px;line-height:1.6;">${details}</p>
        <p style="margin:24px 0 0 0;font-size:12px;color:#94a3b8;">This inquiry was submitted via the Drishte Infotech contact form.</p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: SENDER,
        to: [OWNER_EMAIL],
        replyTo: email,
        subject: subject,
        html: html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: data.message || 'Failed to send email.' }, { status: response.status });
    }

    return Response.json({ success: true, id: data.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}