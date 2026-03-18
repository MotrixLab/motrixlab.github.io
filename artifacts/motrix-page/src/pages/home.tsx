import { Nav } from "@/components/layout/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { News } from "@/components/sections/news";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Nav />

      <main>
        <Hero />
        <About />
        <News />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
