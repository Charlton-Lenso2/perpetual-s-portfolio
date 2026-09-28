import { Link } from 'react-router'
import Container from './Container'

const socials = ['LinkedIn', 'Instagram', 'TikTok']

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Perpetual Rojasi. All rights reserved.</p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s} href="#" className="transition-colors hover:text-accent">
                {s}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}