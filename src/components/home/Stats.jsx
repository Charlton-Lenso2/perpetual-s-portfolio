import Container from '../Container'
import Reveal from '../Reveal'
import { stats } from '../../data/site'

export default function Stats() {
  return (
    <section className="border-y border-line py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-mono text-4xl font-bold text-accent md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}