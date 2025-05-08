"use client";

import { forwardRef } from "react";

export const Section = forwardRef<
  HTMLElement,
  {
    id: string;
    children: React.ReactNode;
  }
>(({ id, children }, ref) => (
  <section
    id={id}
    ref={ref}
    className="container mx-auto space-y-6 px-4 py-6 md:px-8 lg:space-y-12 lg:py-12 xl:px-38"
  >
    {children}
  </section>
));

Section.displayName = "Section";
