import { About } from "./_components/About";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Work } from "./_components/Work";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Footer />
    </main>
  );
}
