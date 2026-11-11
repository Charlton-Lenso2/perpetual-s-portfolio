import { Link } from "react-router";
import { linkedin } from "../data/site";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Container from "../components/Container";
import DownloadCVButton from "../components/DownloadCVButton";
import AboutIntro from "../components/home/AboutIntro";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillsTools from "../components/home/SkillsTools";
import CTA from "../components/home/CTA";
import perpetualPortrait from "../assets/IMG-20240612-WA0050.jpg.jpeg";

const ease = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Hero() {
  return (
    <Container className="pt-28 md:pt-32">
      <div className="grid items-center gap-10 rounded-4xl border border-line bg-paper p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:rounded-[2.5rem] md:p-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="py-4 md:py-8"
        >
          <motion.span
            variants={item}
            className="inline-flex rounded-full border border-line bg-canvas px-4 py-1.5 text-xs font-medium"
          >
            Digital Marketer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl"
          >
            Curious about what makes people{" "}
            <span className="font-serif font-normal italic text-accent">
              click.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I&apos;m Perpetual, a digital marketer based in Harare, building
            campaigns across social media, content, branding and digital
            advertising.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
            >
              View projects <ArrowUpRight size={16} />
            </Link>
            <DownloadCVButton variant="outline" className="px-6 py-3" />
            <Link
              to="/contact"
              className="rounded-full border border-line bg-paper px-6 py-3 text-sm transition-colors hover:border-ink"
            >
              Get in touch
            </Link>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm font-medium transition-colors hover:border-ink hover:text-ink"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* The owner's portrait, as the hero visual. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl md:rounded-4xl bg-canvas">
            <img
              src={perpetualPortrait}
              alt="Perpetual, digital marketer"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-paper/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm md:bottom-6 md:left-6">
              Perpetual Rojasi
            </span>
          </div>
        </motion.div>
      </div>

    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <SkillsTools />
      <Services />
      <FeaturedProjects />
      <CTA />
    </>
  );
}
