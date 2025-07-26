import React from "react";

const cv = "/files/CV_Ryan_Eymas.pdf";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{
      name: string;
      href: string;
      target?: string;
      rel?: string;
      download?: boolean;
    }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Navigation",
    links: [
      { name: "Top", href: "#top" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Work", href: "#work" },
    ],
  },
  {
    title: "Social",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ryan-eymas/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "GitHub",
        href: "https://github.com/IRyan00",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Download CV",
        href: cv,
        download: true,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "eymas.ryan@gmail.com",
        href: "mailto:eymas.ryan@gmail.com",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms and Conditions", href: "/legal" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const Footer7 = ({
  logo = {
    url: "https://github.com/IRyan00",
    src: "/media/logo2.webp",
    alt: "Ryan's logo",
    title: "ryan-s-portfolio.vercel.app",
  },
  sections = defaultSections,
  description = "A portfolio website from a junior full-stack web developer.",
  copyright = "© 2025 ryan-s-portfolio.vercel.app. All rights reserved.",
}: Footer7Props) => {
  return (
    <section>
      <div className="mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-start gap-6 justify-center">
            <div className="flex items-center">
              <a href={logo.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8 invert dark:invert-0"
                />
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {copyright}
            </p>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        download={link.download}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
