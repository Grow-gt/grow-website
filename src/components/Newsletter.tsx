"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter({ t }: { t: Dictionary["newsletter"] }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(t.error);
      return;
    }
    // TODO: integrar con el proveedor de email que elija la ONG (Mailchimp, Brevo…).
    setSubscribed(true);
  }

  return (
    <section aria-labelledby="newsletter-title" className="px-[clamp(20px,4vw,48px)] pb-[clamp(72px,10vw,128px)]">
      <div className="relative mx-auto grid max-w-[1184px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-8 overflow-hidden rounded-block bg-turquoise p-[clamp(32px,5vw,64px)]">
        <div>
          <h2 id="newsletter-title" className="font-display text-[clamp(32px,3.8vw,52px)] leading-none font-extrabold tracking-[-0.03em] text-purple">
            {t.title}
          </h2>
          <p className="mt-3 text-lg text-purple">{t.body}</p>
        </div>
        <div>
          {subscribed ? (
            <div className="flex items-center gap-4 rounded-3xl bg-purple px-7 py-6 text-white" role="status">
              <span className="h-4 w-4 flex-none rounded-full bg-coral" />
              <p className="font-semibold">{t.success}</p>
            </div>
          ) : (
            <>
              <form onSubmit={onSubmit} noValidate className="flex flex-wrap gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder={t.placeholder}
                  aria-label={t.inputLabel}
                  aria-invalid={!!error}
                  aria-describedby="newsletter-error"
                  className={`h-14 min-w-[220px] flex-1 rounded-full border-2 bg-white px-6 text-[17px] text-ink outline-none ${
                    error ? "border-coral" : "border-white"
                  }`}
                />
                <button
                  type="submit"
                  className="h-14 cursor-pointer rounded-full bg-purple px-7 text-base font-bold text-white transition-colors hover:bg-purple-bright"
                >
                  {t.submit}
                </button>
              </form>
              <p id="newsletter-error" aria-live="polite" className="mt-2.5 min-h-5 text-sm font-semibold text-purple">
                {error}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
