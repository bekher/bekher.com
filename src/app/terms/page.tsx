import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Greg Bekher",
  description: "Terms of service for bekher.com",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  By accessing bekher.com (the &quot;Site&quot;), you agree to be bound by these Terms
                  of Service. If you disagree with any part of these terms, you may not access
                  the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Description of Service
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This Site is an informational website operated by Gregory Bekher for the purpose
                  of providing information about consulting services. The Site does not constitute
                  an offer to provide services, and any engagement would be subject to a separate
                  written agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Intellectual Property
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  The content on this Site, including but not limited to text, graphics, logos,
                  and images, is the property of Gregory Bekher and is protected by copyright and
                  other intellectual property laws. You may not reproduce, distribute, or create
                  derivative works from this content without express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Use of Site
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  You agree to use this Site only for lawful purposes and in a way that does not
                  infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment
                  of the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Disclaimer of Warranties
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Gregory Bekher
                  makes no representations or warranties of any kind, express or implied, regarding
                  the operation of the Site or the information, content, or materials included on
                  the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  To the fullest extent permitted by applicable law, Gregory Bekher shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages,
                  or any loss of profits or revenues, whether incurred directly or indirectly, or
                  any loss of data, use, goodwill, or other intangible losses resulting from your
                  access to or use of the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Third-Party Links
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This Site may contain links to third-party websites or services that are not
                  owned or controlled by Gregory Bekher. I have no control over and assume no
                  responsibility for the content, privacy policies, or practices of any third-party
                  websites or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Governing Law
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of
                  the State of New York, United States, without regard to its conflict of law
                  provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Changes to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  I reserve the right to modify or replace these Terms at any time. If a revision
                  is material, I will provide at least 30 days&apos; notice prior to any new terms
                  taking effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Contact
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  If you have any questions about these Terms, please contact me at{" "}
                  <a
                    href="mailto:greg@bekher.com"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    greg@bekher.com
                  </a>.
                </p>
              </section>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  &copy; {new Date().getFullYear()} Gregory Bekher. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
