import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/site'

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <Container className="pt-24 pb-20 md:pt-16 md:pb-28">
      <Reveal>
        <span className="inline-block rounded-full border border-line px-4 py-1.5 font-mono text-xs text-accent">
          Work
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
          Campaigns that moved the <span className="text-accent">needle.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === cat
                  ? 'border-accent bg-accent text-canvas'
                  : 'border-line text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-12 grid gap-x-4 gap-y-10 md:grid-cols-2"
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="mt-12 text-muted">No projects in this category yet.</p>
      )}
    </Container>
  )
}