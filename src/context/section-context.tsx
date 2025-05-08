"use client";

import { createContext, useContext, useState } from "react";

type SectionContextType = {
  activeSection: string | null;
  setActiveSection: (id: string | null) => void;
  sectionsInView: Set<string>;
  setSectionsInView: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const SectionContext = createContext<SectionContextType | null>(null);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [sectionsInView, setSectionsInView] = useState<Set<string>>(new Set());

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        sectionsInView,
        setSectionsInView,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
}
