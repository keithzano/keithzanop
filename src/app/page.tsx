import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/sections/section";
import { SectionNav } from "@/components/sections/section-nav";
import Image from "next/image";
import keith from "@/assets/images/keithzano.jpg";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionNav />
      <section className="py-8 md:px-8 lg:py-12 xl:px-38">
        <div className="container mx-auto gap-6 px-4 lg:flex lg:flex-row lg:gap-12">
          <header className="justify-center lg:flex-1 lg:justify-normal">
            <Image
              src={keith}
              alt="Keith head shot"
              className="max-w-3xs rounded-4xl lg:sticky lg:top-28"
            />
          </header>
          <div className="flex-3 space-y-6 lg:space-y-12">
            <About />
            <Work />
            <Projects />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
