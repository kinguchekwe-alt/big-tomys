"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="wrap">
        <Link href="/" className="wordmark">
          <span className="wordmark-text">
            <span className="shout">BIG TOMY&apos;S</span>
            <span className="tagline">Charbroiled Burgers &amp; Mexican Favorites</span>
          </span>
        </Link>

        <nav className={`main-nav${open ? " is-open" : ""}`} id="main-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn btn-fill btn-sm" href="/menu">
            View Menu
          </Link>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
