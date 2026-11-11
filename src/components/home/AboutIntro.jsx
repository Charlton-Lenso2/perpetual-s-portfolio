import Container from "../Container";
import Reveal from "../Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import perpetualEventPhoto from "../../assets/image.jpeg";

export default function AboutIntro() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal className="grid items-center gap-8 border-b border-line pb-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:pb-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
              A little about me
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Good marketing starts with{" "}
              <span className="font-serif font-normal italic text-accent">
                listening.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              I'm a digital marketer with a curiosity for people,
              stories, and what makes an idea resonate. I enjoy researching an
              audience, shaping clear content, and bringing a campaign together
              with care.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              I'm growing my skills across social media, content, and digital
              advertising, and I'm always looking for thoughtful ways to learn,
              create, and help brands connect with the right people.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              More about me <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-canvas sm:aspect-16/10 md:aspect-4/5">
            <img
              src={perpetualEventPhoto}
              alt="Perpetual, digital marketer"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-paper/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm">
              Digital Marketer
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
