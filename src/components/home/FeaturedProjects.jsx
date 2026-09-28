import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import Container from '../Container'
import Reveal from '../Reveal'
import ProjectCard from '../ProjectCard'
import { projects } from '../../data/site'

export default function FeaturedProjects() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Selected work.
            </h2>
            <Link
              to="/projects"
              className="hidden items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent md:flex"
            >
              All projects <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}