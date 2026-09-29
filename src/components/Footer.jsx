import Container from "./Container";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-muted md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Perpetual Rojasi. All rights reserved.
          </p>
          <SocialLinks className="justify-center md:justify-end" />
        </div>
      </Container>
    </footer>
  );
}
