"use client";

import { forwardRef } from "react";
import { SectionObserver } from "./section-observer";
import { cn } from "@/lib/utils";

export const Section = forwardRef<
  HTMLElement,
  {
    id: string;
    children: React.ReactNode;
    className?: string;
  }
>(({ id, children, className }, ref) => (
  <section id={id} ref={ref} className={cn("relative scroll-mt-16", className)}>
    <SectionObserver id={id} />
    {children}
  </section>
));

Section.displayName = "Section";
