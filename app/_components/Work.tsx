"use client";

import Image from "next/image";
import { projects } from "@app/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Section } from "./Section";

export const Work = () => {
  return (
    <Section className="w-full max-w-6xl mt-30 mx-auto px-4">
      <h2
        id="work"
        className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--thridary-foreground)]"
      >
        My creations
      </h2>

      <div className="w-16 h-1 bg-[var(--thridary-foreground)] mb-6 rounded" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col justify-between h-full group transition-all duration-300 p-0"
          >
            <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            <CardContent className="px-4 py-2 flex flex-col justify-between grow">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--thridary-foreground)]">
                  {project.title}
                </h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>

              <div className="mt-4 relative min-h-8">
                <div className="w-full flex flex-wrap gap-2 transition-opacity duration-300 group-hover:opacity-0 overflow-hidden">
                  {project.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-end transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project"
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    View project{" "}
                    <ExternalLink
                      className="w-4 h-4"
                      aria-label="ExternalLink Icon"
                    />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
