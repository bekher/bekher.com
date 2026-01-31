import Image from "next/image";
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Headshot */}
            <div className="flex justify-center">
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                <Image
                  src="/images/bekher-headshot-aug-25-optimized.jpeg"
                  alt="Greg Bekher"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 288px, 256px"
                  priority
                />
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
                      className="h-5 w-5 text-blue-500 mt-0.5 shrink-0"
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
