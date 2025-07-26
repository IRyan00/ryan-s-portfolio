"use client";
import { useState, useEffect, useRef } from "react";
import { Section } from "./Section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "../../public/media/logo2.webp";
import { ModeToggle } from "@/components/theme-toggle";
import { Menu, X, Home, User, UserCog, Construction } from "lucide-react";
import clsx from "clsx";

const sections = [
  { id: "top", icon: <Home className="inline mr-1" />, label: "Home" },
  { id: "about", icon: <User className="inline mr-1" />, label: "About" },
  { id: "skills", icon: <UserCog className="inline mr-1" />, label: "Skills" },
  { id: "work", icon: <Construction className="inline mr-1" />, label: "Work" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sectionIds = ["top", "about", "skills", "work", "contact"];
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <Section className="flex items-baseline">
        <nav className="container mx-auto grid grid-cols-3 items-center py-4">
          <div className="text-xl font-bold">
            <button
              onClick={() => scrollTo("top")}
              aria-label="Ryan's logo, it's a `R`"
            >
              <Image
                src={logo}
                alt="Ryan's logo, it's a `R`"
                width={30}
                height={30}
                className="invert dark:invert-0"
              />
            </button>
          </div>

          <ul className="hidden lg:flex justify-center space-x-6 text-sm font-medium">
            {sections.map(({ id, icon, label }) => (
              <li key={id}>
                <button
                  className={clsx(
                    "hover:text-[var(--thridary-foreground)] transition-transform duration-200 hover:scale-125",
                    activeSection === id &&
                      "text-[var(--thridary-foreground)] scale-125"
                  )}
                  onClick={() => scrollTo(id)}
                  aria-label={`${label} button`}
                >
                  {icon}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-end items-center space-x-2">
            <Button
              className="font-bold"
              aria-label="Contact button"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </Button>
            <ModeToggle aria-label="Mode toggle" />
          </div>

          {!menuOpen && (
            <button
              className="hover:text-[var(--thridary-foreground)] lg:hidden text-foreground z-50 col-start-3 justify-self-end"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu on mobile"
            >
              <Menu size={28} />
            </button>
          )}
        </nav>

        <div
          ref={menuRef}
          className={clsx(
            "fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-background shadow-xl p-6 z-40 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out lg:hidden items-end",
            {
              "translate-x-0": menuOpen,
              "translate-x-full": !menuOpen,
            }
          )}
        >
          <button
            className="self-end mb-4 hover:text-[var(--thridary-foreground)]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={28} />
          </button>

          {sections.map(({ id, label }) => (
            <button
              key={id}
              className="font-bold hover:text-[var(--thridary-foreground)]"
              aria-label={`${label} section`}
              onClick={() => {
                setMenuOpen(false);
                scrollTo(id);
              }}
            >
              {label}
            </button>
          ))}

          <div className="mt-auto flex items-center gap-2 self-end">
            <Button
              size="sm"
              className="font-bold"
              aria-label="Contact section"
              onClick={() => {
                setMenuOpen(false);
                scrollTo("contact");
              }}
            >
              Contact Me
            </Button>
            <ModeToggle aria-label="Mode toggle" />
          </div>
        </div>
      </Section>
    </header>
  );
};
