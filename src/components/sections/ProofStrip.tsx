import { proofLogos } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function ProofStrip() {
  return (
    <section id="proof" className="py-16 bg-white border-y border-slate-100 dark:bg-slate-950 dark:border-slate-800">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {proofLogos.map((company) => (
              <div
                key={company.name}
                className="text-xl font-semibold text-slate-400 hover:text-slate-600 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
              >
                {company.name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
            Employment and client engagements
          </p>
        </div>
      </Container>
    </section>
  );
}
