import Container from "../Container";
import Reveal from "../Reveal";

const skills = [
  "Social media marketing",
  "Content creation & strategy",
  "Copywriting",
  "Campaign planning",
  "Audience & market research",
  "Customer journey mapping",
  "SEO & keyword research",
  "Email marketing",
  "Branding & visual design",
];

const tools = [
  "Canva",
  "Figma",
  "Meta Business Suite",
  "Google Ads",
  "Google Analytics",
  "Mailchimp",
  "Zapier",
  "Google Sheets",
];

function ListColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item} className="py-3 text-sm text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsTools() {
  return (
    <section className="border-y border-line bg-paper py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
                The toolkit
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Skills &amp; tools
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Foundational marketing skills and platforms I’m building
              experience with.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
            <ListColumn title="Skills" items={skills} />
            <ListColumn title="Tools" items={tools} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
