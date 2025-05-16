import { motion, useInView } from "motion/react";

import { useEffect, useRef, useState } from "react";
import { WorkCard } from "./work-card";
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

type Work = {
  company: string;
  position: string;
  location: string;
  dates: string;
  duties: string[];
};

const works: Work[] = [
  {
    company: "Anton Lubowski Educational Trust (ALET)",
    position: "Technical Assistant (Part Time)",
    location: "Cape Town, Western Cape",
    dates: "March 2020 - Present",
    duties: [
      "Spearheaded the maintenance and optimization of the organization’s website, achieving 99.9% uptime by implementing proactive monitoring and security patches.",
      "Configured and deployed Cisco routers & switches, improving network stability and reducing downtime by 30%.",
      "Streamlined internal communications by migrating to Slack & Trello, enhancing cross-team collaboration and task tracking efficiency.",
    ],
  },
  {
    company: "Africa Space Innovation Centre (F’SATI) | CPUT",
    position: "Engineer (Intern)",
    location: "Cape Town, Western Cape",
    dates: "August 2024 - December 2024",
    duties: [
      "Designed and prototyped a real-time satellite tracking system using ATmega328P microcontroller & Arduino, improving tracking accuracy by 25%.",
      "Developed a custom PCB schematic for interfacing with the Yaesu G-5500 rotator, optimizing signal processing for future fabrication.",
      "Conducted rigorous system validation tests, identifying and resolving 15+ critical bugs, ensuring 98% operational reliability.",
    ],
  },
  {
    company: "Simple Tech",
    position: "Junior Engineer",
    location: "Seychelles, Mahe Island",
    dates: "July 2024 - August 2024",
    duties: [
      "Assisted in deploying Lutron lighting automation systems for commercial clients, reducing energy consumption by 20%.",
      "Provided technical support and troubleshooting for Lutron products.",
      "Maintained detailed documentation of installations and configurations.",
    ],
  },
  {
    company: "Younglings Africa",
    position: "Web Developer",
    location: "Cape Town, Western Cape",
    dates: "June 2023 - May 2024",
    duties: [
      "Built 5+ responsive web applications using React, Next.js, and Django, improving user engagement by 35%.",
      "Optimized database queries & API calls, reducing page load times by 50%.",
      "Worked closely with UX designers to implement intuitive UI/UX, increasing customer satisfaction scores by 40%.",
    ],
  },
];

export const Work = () => {
  const { setActiveSection, setSectionsInView } = useSectionContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setActiveSection("work");
      setSectionsInView((prev) => new Set(prev).add("work"));
    } else {
      setSectionsInView((prev) => {
        const newSet = new Set(prev);
        newSet.delete("work");
        return newSet;
      });
    }
  }, [isInView, setActiveSection, setSectionsInView]);

  const scrollDirection = useScrollDirection();
  return (
    <section ref={ref} id="work" className="space-y-6 lg:space-y-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Work & Experience</h2>
        <h3 className="text-2xl italic">
          {" "}
          Here are some companies I’ve somehow impressed enough to trust me with
          their tech.
        </h3>
      </div>
      {works.map((work, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: scrollDirection === "up" ? 60 : -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <WorkCard work={work} />
        </motion.div>
      ))}
    </section>
  );
};
