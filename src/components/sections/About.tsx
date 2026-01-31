import { about } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { renderWithLinks } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader title="About" />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Headshot placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="h-48 w-48 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <svg
                  className="h-20 w-20 text-slate-400 dark:text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <ul className="space-y-3">
                {about.bio.map((item, index) => (
                  <li
                    key={index}
                    className="text-slate-600 dark:text-slate-300 flex items-start gap-3"
                  >
                    <svg
                      className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {renderWithLinks(item)}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Education:</span>{" "}
                  {about.education}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
