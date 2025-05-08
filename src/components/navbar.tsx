"use client";
import Link from "next/link";
import { Menu, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";
import { useSectionContext } from "@/context/section-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const navLinks = [
    { name: "About", href: "#about", sectionId: "about" },
    { name: "work", href: "#work", sectionId: "work" },
    { name: "Studies", href: "#studies", sectionId: "studies" },
    { name: "Technologies", href: "#technologies", sectionId: "technologies" },
    { name: "Contact", href: "#contact", sectionId: "contact" },
  ];

  const { activeSection } = useSectionContext();

  return (
    <header className="sticky top-0 z-50 md:px-8 xl:px-38">
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 container mx-auto flex h-16 items-center justify-between rounded-lg border-b px-4 backdrop-blur">
        {/* Left side */}
        <Link href="/" className="font-bold">
          <Image src="/images/logo.png" alt="logo" width={50} height={51} />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <nav className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <a // Changed from Link to 'a' for smooth scrolling
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.sectionId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={cn(
                  "hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center rounded-full px-4 py-1 text-sm font-bold transition-colors",
                  activeSection === link.sectionId
                    ? "bg-primary/10 text-primary"
                    : "",
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <ThemeToggle />

          <div>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/keithzano" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/keithzano" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-2 pt-8">
                {navLinks.map((link) => (
                  <a // Changed from Link to 'a'
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.sectionId)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={cn(
                      "hover:bg-accent hover:text-primary-foreground rounded-full px-4 py-3 transition-colors",
                      activeSection === link.sectionId
                        ? "bg-primary/10 text-primary"
                        : "",
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
