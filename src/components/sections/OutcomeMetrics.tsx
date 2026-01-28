import { metrics } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OutcomeMetrics() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <Container>
        <SectionHeader
          title="Measurable Outcomes"
          subtitle="Results from real engagements at scale"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{metric.context}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
