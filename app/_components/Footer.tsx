import { ContactForm } from "./Contact";
import { Footer7 } from "@/components/ui/footer-7";
import { Section } from "./Section";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background py-10 mt-30">
      <Section className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch justify-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--thridary-foreground)]">
              Contact me for collaboration
            </h2>

            <div className="w-16 h-1 bg-[var(--thridary-foreground)] mb-6 rounded" />

            <p className="mb-8">
              Do you have a project in mind? I have the solution so don&apos;t
              wait and contact me today! We&apos;re about to do something
              amazing!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ryan-eymas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-[var(--thridary-foreground)]"
              >
                <Linkedin size={30} aria-label="LinkedIn icon" />
              </a>
              <a
                href="https://github.com/IRyan00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-[var(--thridary-foreground)]"
              >
                <Github size={30} aria-label="GitHub icon" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <ContactForm />
          </div>
        </div>
        <hr className="text-foreground my-10" />
        <Footer7 />
      </Section>
    </footer>
  );
};
