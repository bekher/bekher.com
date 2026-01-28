import { hero, siteConfig } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8 dark:bg-blue-950 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            {hero.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto dark:text-slate-300">
            {hero.subheadline}
          </p>

          {/* Trust Line */}
          <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            {hero.trustLine}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={siteConfig.calendlyUrl} size="large">
              {hero.primaryCta}
            </Button>
            <Button
              href={siteConfig.servicessPdfUrl}
              variant="secondary"
              size="large"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
