"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/smart-contracts", label: "Smart Contracts" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/whitepaper", label: "Whitepaper" },
] as const;

const SOCIAL_ICONS = [
  { href: "https://github.com", src: "/mdi_github.svg", label: "GitHub" },
  { href: "https://discord.com", src: "/mdi_discord.svg", label: "Discord" },
  { href: "https://reddit.com", src: "/mdi_reddit.svg", label: "Reddit" },
  { href: "https://twitter.com", src: "/mdi_twitter.svg", label: "Twitter" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-16 max-w-[1336px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-montserrat text-2xl font-medium text-white"
        >
          NEXUS
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 font-clash text-lg text-white md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-4 md:flex">
          {SOCIAL_ICONS.map(({ href, src, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-5 w-5 items-center justify-center"
            >
              <Image src={src} alt="" width={20} height={20} />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav
          className="border-t border-white/10 bg-black px-4 py-6"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-clash text-lg text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-4">
            {SOCIAL_ICONS.map(({ href, src, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center"
              >
                <Image src={src} alt="" width={24} height={24} />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
