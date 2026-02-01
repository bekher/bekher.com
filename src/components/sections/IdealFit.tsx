import { idealFit } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function IdealFit() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <Container>
        <SectionHeader
          title="Is This a Good Fit?"
          subtitle="Greg Bekher works best with certain types of engagements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Good Fit */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg
                  className="h-5 w-5 text-green-600 dark:text-green-400"
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
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Good Fit</h3>
            </div>
            <ul className="space-y-3">
              {idealFit.goodFit.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-green-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a Fit */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                <svg
                  className="h-5 w-5 text-red-600 dark:text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Not a Fit</h3>
            </div>
            <ul className="space-y-3">
              {idealFit.notFit.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-red-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
