import almo from "@/assets/images/almo.png";
import mnp from "@/assets/images/mnp.png";
import westlake from "@/assets/images/west-lake.png";
import { ProjectCard } from "./project-card";
import { StaticImageData } from "next/image";
import { motion, useInView } from "motion/react";

import { useEffect, useRef, useState } from "react";
import { useSectionContext } from "@/context/section-context";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
}

type Project = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  technologies: string[];
};

const projects: Project[] = [
  {
    name: "Almo Lubowski Personal Website",
    description:
      "A modern and responsive personal website built for Almo Lubowski to showcase his biography, professional achievements, and public engagements. The site features a clean layout, easy navigation, and integrates social media links for increased visibility.",
    link: "https://www.almolubowski.com/",
    image: almo,
    technologies: ["WordPress", "Elementor", "CSS", "PHP"],
  },
  {
    name: "Made in New York Pizza (MNP)",
    description:
      "A vibrant and responsive website built for Made in New York Pizza, a local restaurant brand. The site highlights their signature dishes, menu, store locations, and contact information while reflecting their bold NYC-inspired identity. Designed to attract both walk-in customers and online visitors with a smooth, mobile-friendly experience.",
    link: "https://madeinnewyorkpizza.com/",
    image: mnp,
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
      "WooCommerce",
      "JavaScript",
    ],
  },
  {
    name: "West Lake Fish House",
    description:
      "A clean and elegant WordPress website built for West Lake Fish House, designed to reflect their upscale dining experience. The site features a digital menu, stunning food photography, reservation contact details, and a layout optimized for both desktop and mobile users. Emphasis was placed on creating a modern, easy-to-navigate interface that mirrors the restaurant’s ambiance.",
    link: "https://example.com", // replace with the actual site URL
    image: westlake, // replace with the image import variable
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
      "JavaScript",
      "SEO Plugins",
    ],
  },
];

export const Projects = () => {
  const { setActiveSection, setSectionsInView } = useSectionContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setActiveSection("projects");
      setSectionsInView((prev) => new Set(prev).add("projects"));
    } else {
      setSectionsInView((prev) => {
        const newSet = new Set(prev);
        newSet.delete("projects");
        return newSet;
      });
    }
  }, [isInView, setActiveSection, setSectionsInView]);
  const scrollDirection = useScrollDirection();

  return (
    <section ref={ref} id="projects" className="space-y-6 lg:space-y-12">
      <h2 className="text-2xl font-bold">Projects</h2>
      <h3 className="text-2xl italic">
        {" "}
        Here are some of the Internet stuff i have build
      </h3>

      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: scrollDirection === "up" ? 60 : -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
};
