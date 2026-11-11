import Container from '../Container'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { services } from '../../data/site'

export default function Services() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading tag="Services">
          Everything your brand needs to{' '}
          <span className="font-serif font-normal italic text-accent">grow.</span>
        </SectionHeading>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="group h-full rounded-[2rem] border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-canvas transition-colors group-hover:bg-ink group-hover:text-paper">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}