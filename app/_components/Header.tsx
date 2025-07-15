"use client";
import { useState, useEffect, useRef } from "react";
import { Section } from "./Section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "../../public/media/logo2.avif";
import { ModeToggle } from "@/components/theme-toggle";
import { Menu, X, Home, User, UserCog, Construction } from "lucide-react";
import clsx from "clsx";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    const contactSection = document.getElementById("skills");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const contactSection = document.getElementById("work");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <button onClick={scrollToTop} aria-label="Ryan's logo, it's a `R`">
              <Image
                src={logo}
                alt="Ryan's logo, it's a `R`"
                width={30}
                height={30}
              />
            </button>
          </div>
          <ul className="hidden lg:flex justify-center space-x-6 text-sm font-medium">
            <li>
              <button
                className="hover:text-[var(--thridary-foreground)]"
                onClick={scrollToTop}
                aria-label="Home button"
              >
                <Home className="inline mr-1" aria-label="Home icon" />
              </button>
            </li>
            <li>
              <button
                className="hover:text-[var(--thridary-foreground)]"
                onClick={scrollToAbout}
                aria-label="About section button"
              >
                <User className="inline mr-1" aria-label="User icon" />
              </button>
            </li>
            <li>
              <button
                className="hover:text-[var(--thridary-foreground)]"
                onClick={scrollToSkills}
                aria-label="Skills section button"
              >
                <UserCog className="inline mr-1" aria-label="UserCog icon" />
              </button>
            </li>
            <li>
              <button
                className="hover:text-[var(--thridary-foreground)]"
                onClick={scrollToWork}
                aria-label="Work section button"
              >
                <Construction
                  className="inline mr-1"
                  aria-label="Construction icon"
                />
              </button>
            </li>
          </ul>
          <div className="hidden lg:flex justify-end items-center space-x-2">
            <Button
              className="font-bold"
              aria-label="Contact button"
              onClick={scrollToContact}
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
              <Menu size={28} aria-label="Mobile menu icon" />
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
            <X size={28} aria-label="X icon" />
          </button>
          <button
            className="font-bold hover:text-[var(--thridary-foreground)]"
            aria-label="Home, top of the page"
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
          >
            Home
          </button>
          <button
            className="font-bold hover:text-[var(--thridary-foreground)]"
            aria-label="About section"
            onClick={() => {
              setMenuOpen(false);
              scrollToAbout();
            }}
          >
            About
          </button>
          <button
            className="font-bold hover:text-[var(--thridary-foreground)]"
            aria-label="Skills section"
            onClick={() => {
              setMenuOpen(false);
              scrollToSkills();
            }}
          >
            Skills
          </button>
          <button
            className="font-bold hover:text-[var(--thridary-foreground)]"
            aria-label="Work section"
            onClick={() => {
              setMenuOpen(false);
              scrollToWork();
            }}
          >
            Work
          </button>
          <div className="mt-auto flex items-center gap-2 self-end">
            <Button
              size="sm"
              className="font-bold"
              aria-label="Contact section"
              onClick={() => {
                setMenuOpen(false);
                scrollToContact();
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
