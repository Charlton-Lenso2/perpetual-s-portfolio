import Container from '../Container'
import Reveal from '../Reveal'
import { services } from '../../data/site'

export default function Services() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-5xl">
            What I bring to the table.
          </h2>
        </Reveal>

        <div className="mt-14">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="group grid grid-cols-[3rem_1fr] items-start gap-4 border-t border-line py-8 last:border-b md:grid-cols-[4rem_1fr_1fr] md:items-center md:gap-8">
                <span className="font-mono text-sm text-accent">{s.num}</span>
                <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}