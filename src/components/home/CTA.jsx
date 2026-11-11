import { Mail } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";
import { contact } from "../../data/site";

export default function CTA() {
  return (
    <section className="pt-20 md:pt-28">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] bg-ink px-6 py-20 text-center text-paper md:rounded-[2.5rem] md:py-28">
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl">
              Tell me about your next{" "}
              <span className="font-serif font-normal italic text-accent">
                project.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-paper/60">
              Have a launch, a campaign or a growth goal in mind? Let's talk
              about making it happen.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm text-ink transition-colors hover:bg-accent hover:text-paper"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-paper/20 px-6 py-3 text-sm transition-colors hover:border-paper"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
