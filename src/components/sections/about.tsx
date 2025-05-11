import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useSectionContext } from "@/context/section-context";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

export const About = () => {
  const { setActiveSection, setSectionsInView } = useSectionContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setActiveSection("about");
      setSectionsInView((prev) => new Set(prev).add("work"));
    } else {
      setSectionsInView((prev) => {
        const newSet = new Set(prev);
        newSet.delete("about");
        return newSet;
      });
    }
  }, [isInView, setActiveSection, setSectionsInView]);
  return (
    <section ref={ref} id="about" className="space-y-6 lg:space-y-12">
      <header className="space-y-6">
        <div>
          <h2 className="text-foreground text-4xl">Keith Zanorehamba</h2>
          <h3 className="text-2xl">Software developer</h3>
        </div>
        <div className="flex gap-6">
          <Button>
            <Github />
            GitHub
          </Button>
          <Button>
            <Linkedin />
            LinkedIn
          </Button>
          <Button>
            <Mail />
            Email
          </Button>
        </div>
      </header>
      <main className="space-y-6">
        <h3 className="text-2xl font-bold">About me</h3>
        <p>
          I'm a Computer Engineering graduate with a passion for solving
          problems through code, driven by curiosity, creativity, and the
          occasional caffeine-induced breakthrough. My background spans software
          development, systems engineering, and real-world project
          implementation from building responsive web apps to working on
          intelligent security systems using machine learning and embedded
          hardware. I'm particularly interested in working on impactful,
          scalable technology that blends functionality with thoughtful design.
          Whether collaborating in a team or deep-diving into debugging solo, I
          bring persistence, a willingness to learn fast, and a healthy sense of
          humor to everything I do.
        </p>
        <div>
          <h3 className="text-2xl font-bold">
            How I Became a Software Developer
          </h3>
          <h4 className="text-lg italic">(AKA The Honest version)</h4>
        </div>
        <p>
          I became a Software Engineer the modern way panic-taught myself to
          code in 2020 while the world burned, because I needed a hobby that
          wasn’t “panic-buying toilet paper.” Then gaslit myself into getting a
          Computer Engineering degree to prove it wasn’t a fluke. (The paper
          says I’m legit now. The code... well)
        </p>
        <p>
          Turns out, yelling at Python errors was more fun than staring at my
          ceiling, so I went all-in. Three years, one existential crisis, and
          approximately 47,832 Stack Overflow tabs later, I’ve learned a few
          things which inlcude
        </p>
        <ul className="marker:text-primary list-disc space-y-1 pl-5 marker:text-2xl">
          <li className="ps-2">
            Turning "it works on my machine" into "it works in prod (usually)"
          </li>
          <li className="ps-2">
            Nodding solemnly when non-techies say "blockchain?"
          </li>
          <li className="ps-2">
            Keeping a straight face when non-devs say “just make it pop”
          </li>
        </ul>
        <p>
          Now I’m currently looking for a company desperate enough to trade
          money for my ability to:
        </p>

        <ul className="marker:text-primary list-disc space-y-1 pl-5 marker:text-2xl">
          <li className="ps-2">Turn coffee into (mostly functional) code</li>
          <li className="ps-2">
            Nod seriously during meetings about “scalability”
          </li>
          <li className="ps-2">
            Google things so fast it looks like I know the answer
          </li>
        </ul>
      </main>
    </section>
  );
};
