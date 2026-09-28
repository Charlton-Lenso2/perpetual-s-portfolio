import { Mail } from 'lucide-react'
import Container from '../Container'
import Reveal from '../Reveal'

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-line bg-paper px-6 py-16 text-center md:px-10 md:py-24">
            <h2 className="mx-auto max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Let's build something that <span className="text-accent">converts.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted">
              Have a campaign, launch or growth goal in mind? Let's talk about
              making it happen.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@perpetual.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}