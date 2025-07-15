"use client";

import { Section } from "./Section";
import avatar from "../../public/media/avatar.webp";
import Image from "next/image";
const cv = "/files/CV_Ryan_Eymas.pdf";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Layers } from "lucide-react";

export const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto my-40 px-4">
      <div id="top" className="flex-1 text-left space-y-4">
        <h1 className="h1 text-4xl font-bold text-[var(--thridary-foreground)]">
          Ryan EYMAS
        </h1>
        <h2 className="h2 text-2xl flex items-center gap-2">
          Junior Full Stack Developer <Layers aria-label="Layers icon" />
        </h2>
        <div className="flex gap-4">
          <Button
            className="font-bold"
            aria-label="Download CV"
            onClick={() => window.open(cv, "_blank")}
          >
            Download CV
            <Download aria-label="Download icon" />
          </Button>

          <Button
            variant="outline"
            className="font-bold"
            aria-label="Call to action, scroll to about section"
            onClick={handleScrollToAbout}
          >
            Scroll Down <ArrowDown aria-label="ArrowDown icon" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          src={avatar}
          alt="Ryan's avatar"
          width={500}
          height={500}
          className="rounded-2xl"
          priority={true}
          loading="eager"
        />
      </div>
    </Section>
  );
};
