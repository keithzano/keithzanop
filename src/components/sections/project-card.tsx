import Image, { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
  technologies: string[];
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group bg-background hover:bg-muted/50 flex flex-col gap-6 rounded-lg p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-md md:flex-row">
      {/* Image section */}
      <div className="md:flex-1">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          className="h-48 w-full rounded-lg object-cover object-center md:h-full"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between space-y-4 md:flex-3">
        <div>
          <h3 className="text-lg font-bold">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2"
            >
              {project.name}
              <ExternalLink className="text-primary h-4 w-4" />
            </a>
          </h3>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2 text-xs">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-secondary text-foreground rounded-full px-3 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
