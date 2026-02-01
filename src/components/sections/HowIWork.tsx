import { workSteps } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowIWork() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader
          title="How Greg Bekher Works"
          subtitle="Pragmatic execution, high ownership, first-principles strategy, fast feedback loops, measurable outcomes"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

            <div className="space-y-8">
              {workSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Step number */}
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-sm">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
