import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Greg Bekher",
  description: "Privacy policy for bekher.com",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Introduction
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Gregory Bekher (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) operates bekher.com (the &quot;Site&quot;).
                  This page informs you of my policies regarding the collection, use, and disclosure
                  of personal information when you use the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Information Collection and Use
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This is a static informational website. I do not collect personal information
                  directly through this Site. However, if you choose to contact me via email or
                  schedule a call through the provided links, you may voluntarily provide personal
                  information such as your name, email address, and company information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Third-Party Services
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This Site may contain links to third-party services such as Calendly for
                  scheduling and LinkedIn for professional networking. These services have their
                  own privacy policies, and I encourage you to review them. I am not responsible
                  for the privacy practices of these third-party services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Analytics
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This Site may use analytics services to understand how visitors interact with
                  the Site. These services may collect information such as your IP address, browser
                  type, pages visited, and time spent on pages. This information is used solely to
                  improve the Site and is not shared with third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Cookies
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This Site may use cookies and similar tracking technologies to enhance your
                  experience. You can instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  I value your trust in providing any personal information and strive to use
                  commercially acceptable means of protecting it. However, no method of transmission
                  over the Internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  I may update this Privacy Policy from time to time. I will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the
                  &quot;Last updated&quot; date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Contact
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact me at{" "}
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
