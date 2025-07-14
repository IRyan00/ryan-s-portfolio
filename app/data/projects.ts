export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Web developer - Full stack",
    description:
      "Welcome to my portfolio website, showcasing the projects and skills of an aspiring full stack developer passionate about creating dynamic and responsive web applications.",
    image: "/media/homepage-screenshot.png",
    tags: ["Typescript", "Next.js", "Shadcn/ui", "TailwindCSS"],
    link: "https://eval-back-end.vercel.app/",
  },
  {
    id: "2",
    title: "Nanny",
    description:
      "I created a professional portfolio website to showcase the experience and dedication of a nurturing nursery assistant, highlighting her commitment to early childhood education and development.",
    image: "/media/assmat.png",
    tags: ["MERN", "Bootstrap", "CSS"],
    link: "https://nanny-jet.vercel.app/",
  },
];
