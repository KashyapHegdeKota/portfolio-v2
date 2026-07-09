"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Rss, Sparkle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Magnetic from "./Magnetic";

const navItems = [
  { label: "Home", href: "/#about", id: "about" },
  { label: "Work", href: "/#projects", id: "projects" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Notes", href: "/blog", id: "blog" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const onBlogRoute = pathname?.startsWith("/blog");

  const activeId = useMemo(() => {
    if (onBlogRoute) {
      return "blog";
    }

    return activeSection;
  }, [activeSection, onBlogRoute]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (onBlogRoute) {
      return undefined;
    }

    const sections = navItems
      .filter((item) => item.id !== "blog")
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [onBlogRoute]);

  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-4">
      <nav
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between rounded-[8px] border border-white/10 bg-[#101010]/72 px-3 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-glass md:px-4"
        aria-label="Primary navigation"
      >
        <Magnetic strength={0.18} rotation={3} className="shrink-0">
          <Link
            href="/#about"
            className="group flex items-center gap-3 rounded-[8px] px-3 py-2"
            data-cursor="button"
          >
            <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-white/10 bg-white/[0.06] text-sm font-bold text-cyan">
              K
            </span>
            <span className="hidden min-w-0 flex-col leading-none sm:flex">
              <span className="font-display text-sm font-semibold text-porcelain">
                Kashyap Hegde Kota
              </span>
              <span className="mt-1 text-[0.68rem] uppercase text-white/45">
                Creative Engineer
              </span>
            </span>
          </Link>
        </Magnetic>

        <div className="hidden items-center gap-1 rounded-[8px] border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <Magnetic key={item.id} strength={0.16} rotation={2} cursor="link">
              <Link
                href={item.href}
                className="relative rounded-[7px] px-4 py-2 text-sm font-medium text-white/62 transition-colors duration-300 hover:text-porcelain"
                data-cursor="link"
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-[7px] border border-white/10 bg-white/[0.09] shadow-[0_0_28px_rgba(139,233,253,0.16)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Magnetic strength={0.18} rotation={3}>
            <Link
              href="/blog"
              className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 text-sm font-medium text-porcelain transition-colors hover:border-cyan/40"
              data-cursor="button"
            >
              <Rss size={16} />
              Blog
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.06] text-porcelain md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          data-cursor="button"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mx-auto mt-3 w-full max-w-5xl overflow-hidden rounded-[8px] border border-white/10 bg-[#101010]/92 shadow-[0_22px_90px_rgba(0,0,0,0.5)] backdrop-blur-glass md:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
          >
            <div className="grid gap-1 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center justify-between rounded-[8px] px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-porcelain"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  {activeId === item.id && <Sparkle size={15} className="text-acid" />}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
