import Image, { StaticImageData } from "next/image";
import { Section } from "./section";
import almo from "@/assets/images/almo.png";
import mnp from "@/assets/images/mnp.png";
import westlake from "@/assets/images/west-lake.png";
import { ExternalLink } from "lucide-react";
import { ProjectCard } from "./project-card";

type Work = {
  company: string;
  position: string;
  location: string;
  dates: string;
  duties: string[];
};

type Project = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  technologies: string[];
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

export const Work = () => {
  return (
    <Section id="work" className="space-y-6 lg:space-y-12">
      <h2 className="text-3xl font-bold">Work & Experience</h2>
      <h3 className="text-2xl italic">
        {" "}
        Here are some companies I’ve somehow impressed enough to trust me with
        their tech.
      </h3>
      {works.map((work) => (
        <article
          key={work.company}
          className="group bg-background hover:bg-muted/50 space-y-4 rounded-lg p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-md"
        >
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <h3 className="group-hover:text-primary text-lg font-semibold transition">
                {work.position}
              </h3>
              <h4 className="text-muted-foreground text-sm italic">
                {work.company}
              </h4>
            </div>
            <div className="text-right">
              <h3 className="text-base font-medium">{work.location}</h3>
              <h4 className="text-muted-foreground text-sm italic">
                {work.dates}
              </h4>
            </div>
          </div>
          <ul className="marker:text-primary list-disc space-y-1 pl-5 marker:text-2xl">
            {work.duties.map((dutie, index) => (
              <li key={index} className="ps-2">
                {dutie}
              </li>
            ))}
          </ul>
        </article>
      ))}

      <h2 className="text-2xl font-bold">Projects</h2>
      <h3 className="text-2xl italic">
        {" "}
        Here are some of the Internet stuff i have build
      </h3>

      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Section>
  );
};
