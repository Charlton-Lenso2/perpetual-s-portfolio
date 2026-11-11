import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, Film } from 'lucide-react'
import Container from '../Container'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import ProjectLightbox from '../ProjectLightbox'
import { projects } from '../../data/site'

function ProjectCard({ project, featured, onOpen }) {
  return (
    <Reveal className={featured ? 'md:col-span-2' : ''}>
      <div
        onClick={() => onOpen(project)}
        className="group block cursor-pointer rounded-4xl border border-line bg-paper p-3 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      >
        <div
          className={`relative overflow-hidden rounded-3xl ${
            featured ? 'aspect-16/8' : 'aspect-4/3'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
              project.imageFit === 'contain'
                ? 'bg-white object-contain'
                : 'object-cover'
            }`}
          />
          {project.video && (
            <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-paper backdrop-blur-sm">
              <Film size={13} /> Video
            </span>
          )}
        </div>

        <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-5">
          <div>
            <span className="rounded-full border border-line bg-canvas px-3 py-1 text-xs font-medium">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{project.result}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:bg-ink group-hover:text-paper">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Reveal>
  )
}

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null)
  const featured = projects.slice(0, 3)

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading tag="Selected work">
          Campaigns that moved the{' '}
          <span className="font-serif font-normal italic text-accent">needle.</span>
        </SectionHeading>

        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              featured={i === 0}
              onOpen={setActiveProject}
            />
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm transition-colors hover:border-ink"
          >
            View all projects <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </Container>

      <ProjectLightbox
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
