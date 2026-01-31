import { finalCta, siteConfig } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {finalCta.headline}
          </h2>

          <p className="mt-4 text-lg text-slate-300">{finalCta.availability}</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={siteConfig.calendlyUrl} size="large">
              Book a call
            </Button>
            {siteConfig.showServicesPdfCta && (
              <Button
                href={siteConfig.servicessPdfUrl}
                variant="secondary"
                size="large"
                className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:border-slate-500"
              >
                Download services brief
              </Button>
            )}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={siteConfig.linkedinUrl}
              className="text-slate-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
