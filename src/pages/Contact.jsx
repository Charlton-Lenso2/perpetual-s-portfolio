import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to a form service (Formspree, Resend, etc.) before launch.
    setSent(true);
  }

  return (
    <Container className="pt-24 pb-20 md:pt-16 md:pb-28">
      <Reveal>
        <span className="inline-block rounded-full border border-line px-4 py-1.5 font-mono text-xs text-accent">
          Contact
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
          Let's talk about your next{" "}
          <span className="text-accent">campaign.</span>
        </h1>
      </Reveal>

      <div className="mt-8 grid gap-10 md:mt-14 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div className="order-1 md:order-2">
          <Reveal delay={0.2}>
            {sent ? (
              <div className="rounded-2xl border border-line bg-paper p-10 text-center">
                <p className="text-xl font-bold">Thanks — message sent.</p>
                <p className="mt-2 text-muted">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block font-mono text-xs text-muted">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs text-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs text-muted">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
                >
                  Send message <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="order-2 md:order-1">
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:hello@perpetual.com"
                className="flex min-w-0 items-center gap-3 text-base transition-colors hover:text-accent sm:text-lg"
              >
                <Mail size={20} className="shrink-0" />
                <span className="break-all">hello@perpetual.com</span>
              </a>
              <SocialLinks className="justify-start gap-x-5" />
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  );
}
