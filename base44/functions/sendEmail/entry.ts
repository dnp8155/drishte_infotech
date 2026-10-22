import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';
import { secrets } from 'base44:runtime';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized — please log in.' }, { status: 401 });

    const body = await req.json();
    const { to, subject, message, from } = body;

    if (!to || !subject || !message) {
      return Response.json({ error: 'Missing required fields: to, subject, message' }, { status: 400 });
    }

    const apiKey = secrets.get("RESEND_API_KEY");
    if (!apiKey) {
      return Response.json({ error: 'Resend API key not configured.' }, { status: 500 });
    }

    // Convert plain text to basic HTML
    const html = message
      .split('\n')
      .map((line) => line.trim() ? `<p style="margin:0 0 12px 0;line-height:1.6;">${line}</p>` : '<br/>')
      .join('');

    const sender = from || 'Drishte Infotech <onboarding@resend.dev>';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: sender,
        to: [to],
        subject: subject,
        html: html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: data.message || 'Failed to send email via Resend.' }, { status: response.status });
    }

    return Response.json({ success: true, id: data.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}