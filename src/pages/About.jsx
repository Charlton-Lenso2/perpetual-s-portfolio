import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Timeline from "../components/about/Timeline";
import CTA from "../components/home/CTA";

const certificates = [
  {
    title: "Digital Marketing Foundations",
    issuer: "Certificate issuer",
    image: "https://picsum.photos/seed/certificate-foundations/900/620",
  },
  {
    title: "Social Media Strategy",
    issuer: "Certificate issuer",
    image: "https://picsum.photos/seed/certificate-social/900/620",
  },
  {
    title: "Analytics & Measurement",
    issuer: "Certificate issuer",
    image: "https://picsum.photos/seed/certificate-analytics/900/620",
  },
];

export default function About() {
  return (
    <>
      <Container className="pt-12 pb-4 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <Reveal>
            <span className="inline-block rounded-full border border-line px-4 py-1.5 font-mono text-xs text-accent">
              About me
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Marketing that's built to{" "}
              <span className="text-accent">perform.</span>
            </h1>
            <p className="mt-6 leading-relaxed text-muted">
              I'm Perpetual — a marketing strategist who believes good campaigns
              aren't about noise, they're about precision. I've spent years
              helping founders and brands turn strategy into measurable growth,
              and I bring that same rigor to every project I take on.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://picsum.photos/seed/perpetual-about/1000/1100"
                alt="Perpetual Rojasi"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="py-16 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase text-accent">
              Learning & development
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Certificates
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            A growing collection of learning milestones. Replace each image and
            issuer with the original certificate details.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="overflow-hidden rounded-xl border border-line bg-paper"
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate placeholder`}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-accent">{certificate.issuer}</p>
                <h3 className="mt-2 text-lg font-semibold">
                  {certificate.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Timeline />
      <CTA />
    </>
  );
}
