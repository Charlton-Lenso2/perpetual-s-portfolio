import { Link } from 'react-router'
import { Download } from 'lucide-react'
import Container from './Container'
import { cvUrl, socials } from '../data/site'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="pb-3 pt-3 md:pb-5">
      <Container>
        <div className="flex flex-col gap-8 rounded-[2rem] border border-line bg-paper px-6 py-8 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <Link to="/" className="font-serif text-3xl italic tracking-tight">
              Perpetual<span className="text-accent">.</span>
            </Link>

            <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="inline-flex min-h-8 items-center transition-colors hover:text-ink"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noreferrer" : undefined}
                    className="inline-flex min-h-8 items-center gap-1.5 transition-colors hover:text-ink"
                  >
                    <Icon size={15} /> {s.label}
                  </a>
                );
              })}
              <a
                href={cvUrl}
                download="Perpetual-Rojasi-CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
              >
                <Download size={15} /> Download CV
              </a>
            </div>
          </div>

          <div className="border-t border-line pt-6 text-xs text-muted">
            © {new Date().getFullYear()} Perpetual Rojasi. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}