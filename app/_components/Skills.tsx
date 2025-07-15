import { Section } from "./Section";
import { Icons } from "@/components/ui/icons";

export const Skills = () => {
  return (
    <Section className="max-w-6xl mx-auto mt-30 px-4">
      <h2
        id="skills"
        className="h2 text-3xl font-bold mb-8 text-[var(--thridary-foreground)]"
      >
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {Object.entries(Icons).map(([name, Icon]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4"
          >
            <Icon className="h-8 w-8" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
