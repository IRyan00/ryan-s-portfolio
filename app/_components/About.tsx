import { Section } from "./Section";

export const About = () => {
  return (
    <Section className="border min-w-2xs max-w-6xl mt-30 bg-[var(--secondary)] rounded-2xl p-7">
      <h2
        id="about"
        className="h2 text-3xl font-bold mb-2 text-[var(--thridary-foreground)]"
      >
        Hi, I&apos;m Ryan
      </h2>

      <div className="w-16 h-1 bg-[var(--thridary-foreground)] mb-6 rounded" />

      <p className="text-lg leading-relaxed">
        I&apos;m a junior web developer with a passion for building websites
        that are easy to use and visually appealing. I specialize in creating
        the parts of a website that people interact with, like buttons, forms,
        and page layouts. I use tools to structure content, to style it and to
        make it interactive.
      </p>
      <p className="text-lg leading-relaxed">
        I&apos;m always eager to learn and improve, and I enjoy working on
        projects that solve real problems and help people navigate the web more
        smoothly. Whether it&apos;s fixing a small bug or helping design a new
        feature, I&apos;m excited to grow my skills and contribute to a great
        user experience.
      </p>
    </Section>
  );
};
