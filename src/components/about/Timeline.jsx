import Container from '../Container'
import Reveal from '../Reveal'
import { timeline } from '../../data/site'

export default function Timeline() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-5xl">
            How I got here.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <div className="flex gap-6 border-t border-line py-8 first:border-t-0 md:gap-12">
                <span className="w-16 shrink-0 pt-1 font-mono text-sm text-accent md:w-20">
                  {t.year}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight md:text-2xl">{t.title}</h3>
                  <p className="mt-2 text-muted">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}