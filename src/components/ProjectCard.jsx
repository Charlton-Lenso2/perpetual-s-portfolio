import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Link to="/projects" className="group block">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-accent">{project.category}</p>
          <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.result}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </Link>
  )
}