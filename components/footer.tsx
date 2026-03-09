import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/smart-contracts", label: "Smart Contracts" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/whitepaper", label: "Whitepaper" },
] as const;

const CONTACTS = [
  { type: "Email", value: "hello@nexus.io", href: "mailto:hello@nexus.io" },
  { type: "Twitter", value: "@nexus", href: "https://twitter.com" },
  { type: "Discord", value: "discord.gg/nexus", href: "https://discord.com" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-16 px-4">
      <div className="mx-auto max-w-[1336px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] uppercase text-white">
              NEXUS
            </p>
            <p className="max-w-[320px] text-sm text-neutral-400">
              Next-generation blockchain infrastructure. Fast, secure, scalable.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-sm font-semibold text-white">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacts */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="flex flex-col gap-3">
              {CONTACTS.map(({ type, value, href }) => (
                <li key={type}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
