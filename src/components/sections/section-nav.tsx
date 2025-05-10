"use client";

import { cn } from "@/lib/utils";
import { useSectionContext } from "@/context/section-context";
import { useEffect, useState } from "react";

const SIDE_MENU_SECTIONS = ["about", "work", "projects"] as const;

type SideMenuSection = (typeof SIDE_MENU_SECTIONS)[number];

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
] satisfies { id: SideMenuSection; label: string }[];

export function SectionNav() {
  const { activeSection, sectionsInView } = useSectionContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if:
    // 1. There are sections in view AND
    // 2. The active section is in our side menu list
    const shouldShow =
      sectionsInView.size > 0 &&
      activeSection !== null &&
      SECTIONS.some((item) => item.id === activeSection);

    setIsVisible(shouldShow);
  }, [activeSection, sectionsInView]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={cn(
        "fixed top-1/2 left-10 z-50 hidden -translate-y-1/2 transition-opacity duration-300 md:block",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ul className="list-none space-y-3">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "group flex items-center transition-all",
                "hover:text-primary text-sm focus-visible:outline-none",
                activeSection === section.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "bg-primary absolute -left-4 h-2 w-2 rounded-full",
                  "transition-all duration-300",
                  activeSection === section.id
                    ? "scale-125 opacity-100"
                    : "scale-50 opacity-0 group-hover:opacity-70",
                )}
              />
              <span
                className={cn(
                  "transition-transform duration-300",
                  activeSection === section.id && "translate-x-2",
                )}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
