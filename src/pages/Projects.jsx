import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/site";

const filters = [
  "All work",
  ...new Set(projects.map((project) => project.category)),
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const visibleProjects =
    activeFilter === "All work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pb-20 pt-28 sm:pt-32">
      <Container>
        <Reveal>
          <section className="border-b border-line pb-10 md:pb-14">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
              The portfolio
            </p>
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
                  Ideas made to{" "}
                  <span className="font-serif font-normal italic text-accent">
                    connect.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl leading-relaxed text-muted">
                  A collection of campaign concepts and digital marketing work
                  across social, paid media, and content.
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted">
                {String(visibleProjects.length).padStart(2, "0")} projects
              </p>
            </div>
          </section>
        </Reveal>

        <section className="pt-8 md:pt-10" aria-label="Project gallery">
          <div
            className="mb-7 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeFilter === filter
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:gap-5">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-line pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
              Have something in mind?
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Let’s talk about your project.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}
