import React, { useState } from "react";
import { Send, Mail, Check, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/landing/Navbar";
import FooterNew from "@/components/landing/FooterNew";
import Reveal from "@/components/landing/Reveal";

export default function SendEmail() {
  const [form, setForm] = useState({ to: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await base44.functions.invoke("sendEmail", {
        to: form.to,
        subject: form.subject,
        message: form.message,
      });
      if (res.data?.error) {
        setStatus("error");
        setErrorMsg(res.data.error);
      } else {
        setStatus("success");
        setForm({ to: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.error || err.message || "Something went wrong.");
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Mail className="w-3.5 h-3.5" />
              Email Sender
            </div>

            <h1 className="mt-6 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
              Send an email from Drishte Infotech
            </h1>
            <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
              Compose a message and send it to any email address. Powered by Resend.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col gap-5"
            >
              <div>
                <label className="text-xs font-medium text-muted-foreground">To (recipient email)</label>
                <input
                  required
                  type="email"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className={`mt-1.5 ${field}`}
                  placeholder="someone@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`mt-1.5 ${field}`}
                  placeholder="Email subject"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`mt-1.5 ${field} resize-y`}
                  placeholder="Type your message here..."
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : status === "success" ? (
                  <>
                    Sent! <Check className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Send Email <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Note: The "from" address uses Resend's default <code className="px-1 py-0.5 rounded bg-muted text-foreground">onboarding@resend.dev</code> until you verify your own domain in Resend.
            </p>
          </Reveal>
        </div>
      </main>
      <FooterNew />
    </div>
  );
}