"use client";

import { useEffect, useState } from "react";

type SubmissionPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export function ThankYouSubmission() {
  const [payload, setPayload] = useState<SubmissionPayload | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("thankyou-submission");
      if (!raw) return;
      const parsed = JSON.parse(raw) as SubmissionPayload;
      setPayload(parsed);
    } catch {
      setPayload(null);
    }
  }, []);

  const name = payload?.name?.trim();
  const email = payload?.email?.trim();
  const subject = payload?.subject?.trim();
  const message = payload?.message?.trim();
  const hasSubmission = Boolean(name || email || subject || message);

  if (!hasSubmission) return null;

  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-[color:var(--glass)] p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
        Submission Details
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {name ? (
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Name
            </p>
            <p className="mt-2 text-[color:var(--text)]">{name}</p>
          </div>
        ) : null}
        {email ? (
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Email
            </p>
            <p className="mt-2 text-[color:var(--text)]">{email}</p>
          </div>
        ) : null}
        {subject ? (
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Subject
            </p>
            <p className="mt-2 text-[color:var(--text)]">{subject}</p>
          </div>
        ) : null}
        {message ? (
          <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Message
            </p>
            <p className="mt-2 whitespace-pre-wrap text-[color:var(--text)]">
              {message}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
