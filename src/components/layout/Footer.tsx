import { siteConfig } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              {siteConfig.name}
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.title}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {siteConfig.email != null && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
              >
                {siteConfig.email}
              </a>
            )}
            <a
              href={siteConfig.linkedinUrl}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.githubUrl}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
              >
                Terms
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
