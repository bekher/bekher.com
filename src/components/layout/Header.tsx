"use client";

import { useState } from "react";
import { siteConfig, navItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
              <span className="hidden sm:inline-block text-sm text-slate-500 dark:text-slate-400">
                {siteConfig.title}
              </span>
            </a>
            <span className="hidden sm:inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {siteConfig.location}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Button href={siteConfig.calendlyUrl} size="default">
              Book a call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href={siteConfig.calendlyUrl} className="w-full">
              Book a call
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
