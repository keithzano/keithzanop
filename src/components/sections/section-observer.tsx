"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "@/context/section-context";

export function SectionObserver({ id }: { id: string }) {
  const { setActiveSection, setSectionsInView } = useSectionContext();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    setSectionsInView((prev) => {
      const newSet = new Set(prev);
      if (inView) {
        newSet.add(id);
        setActiveSection(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, [inView, id, setActiveSection, setSectionsInView]);

  return <div ref={ref} className="absolute top-1/4 h-px w-full" />;
}
