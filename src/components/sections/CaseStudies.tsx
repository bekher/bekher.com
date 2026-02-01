import { caseStudies, caseStudyUrls } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { renderWithLinks } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader
          title="Case Studies"
          subtitle="Deep dives into recent platform work"
        />

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-slate-900 dark:bg-slate-950 text-white px-6 py-4 sm:px-8 sm:py-5">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {caseStudyUrls[study.company] ? (
                    <a
                      href={caseStudyUrls[study.company]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-slate-200"
                    >
                      {study.company}
                    </a>
                  ) : (
                    renderWithLinks(study.company)
                  )}
                </h3>
                <p className="mt-1 text-slate-300 text-sm sm:text-base">
                  {study.context}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-3">
                      Challenge
                    </h4>
                    <ul className="space-y-2">
                      {study.challenge.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-red-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                      Approach & Delivery
                    </h4>
                    <ul className="space-y-2">
                      {study.solution.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-blue-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3">
                      Impact
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                        >
                          <svg
                            className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
