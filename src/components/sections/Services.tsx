import { services } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { renderWithLinks } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader
          title="How I Can Help"
          subtitle="I take a small number of high-impact and specialized consulting engagements tailored to your platform challenges. "
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Best for
                </span>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{service.bestFor}</p>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Proof
                </span>
                <ul className="mt-2 space-y-1">
                  {service.proof.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      {renderWithLinks(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Deliverables
                </span>
                <ul className="mt-2 space-y-1">
                  {service.deliverables.map((item, i) => (
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {(service.timeline || service.engagement) && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {service.timeline || service.engagement}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
