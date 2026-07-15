"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-whisper"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#topo"
          className="flex items-center gap-3"
          aria-label={`${SITE.name} — página inicial`}
        >
          <span
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              scrolled ? "h-8 w-8" : "h-10 w-10"
            }`}
          >
            <Image
              src="/logo.jpg"
              alt={`Logo ${SITE.name}`}
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span
            className={`font-medium tracking-tight transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-ink"
            }`}
          >
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-full bg-primary-700 px-5 py-2.5 text-sm font-medium text-paper shadow-whisper transition-transform hover:scale-[1.03] md:inline-block"
        >
          Seja voluntário
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-ink/5 bg-paper px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-primary-700 px-5 py-2.5 text-sm font-medium text-paper"
              >
                Seja voluntário
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
