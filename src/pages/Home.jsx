import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTA from "../components/home/CTA";

const ease = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Hero() {
  return (
    <Container className="pt-24 pb-16 md:pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14"
      >
        <motion.div variants={item} className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/perpetual-client/1000/1200"
            alt="A portrait representing a client campaign"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>

        <div className="py-2 md:py-8">
          <motion.span
            variants={item}
            className="inline-block rounded-full border border-line px-4 py-1.5 font-mono text-xs text-accent"
          >
            Digital Marketer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 text-[2.75rem] font-black leading-[0.98] sm:text-5xl md:text-7xl"
          >
            Bold ideas.
            <br />
            Measurable
            <br />
            <span className="text-accent">growth.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Perpetual Rojasi brings thoughtful strategy and creative execution
            together to help brands reach the right people and turn attention
            into action.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
            >
              View work <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}

function HomeAbout() {
  return (
    <Container className="pb-20 md:pb-28">
      <div className="grid items-center gap-8 border-t border-line pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-16">
        <div>
          <span className="font-mono text-xs uppercase text-accent">
            A little about me
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            Curious by nature. Focused on what moves people.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            I’m Perpetual, an early-career digital marketer who enjoys finding
            the human story behind every brand. I bring curiosity, care, and a
            test-and-learn mindset to the work, from shaping clear messages to
            building content and campaigns that meet people where they are. I’m
            especially interested in the details that make good marketing feel
            personal: understanding an audience, choosing the right channel, and
            learning from the results. Every project is a chance to ask better
            questions, make something useful, and help a business grow with
            intention.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            More about me <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/perpetual-about-home/1000/760"
            alt="Creative workspace representing Perpetual's approach to marketing"
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <Stats />
      <Services />
      <FeaturedProjects />
      <CTA />
    </>
  );
}
