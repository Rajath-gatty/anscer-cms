import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "../components/animation";

export const metadata: Metadata = {
  title: "Terms & Conditions | ANSCER Robotics",
  description:
    "Review the terms and conditions governing the use of ANSCER Robotics' website, products, and online automation advisory services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#011f40] pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="site-container max-w-[860px]">
        <FadeUp>
          {/* Header */}
          <h1 className="text-3xl font-bold tracking-tight text-[#011f40] md:text-4xl lg:text-[42px]">
            Terms and Conditions
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-8 text-sm text-[#555]">
            <p>
              <strong className="font-semibold text-[#011f40]">Effective Date:</strong>{" "}
              Jan 29, 2026
            </p>
            <p>
              <strong className="font-semibold text-[#011f40]">Last Updated:</strong>{" "}
              Jan 29, 2026
            </p>
          </div>

          {/* Policy Content */}
          <div className="mt-10 space-y-10">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                Welcome to ANSCER Robotics (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;)
                govern your access to and use of our website{" "}
                <Link
                  href="/"
                  className="font-medium text-[#005ead] transition hover:underline"
                >
                  https://anscer.com
                </Link>{" "}
                (&quot;Website&quot;) and our services. By accessing or using
                our Website, you agree to be bound by these Terms. If you do not
                agree to these Terms, please do not use our Website.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                2. DEFINITIONS
              </h2>
              <ul className="list-disc space-y-2.5 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    &quot;Company&quot;
                  </strong>{" "}
                  refers to ANSCER ROBOTICS PVT LTD
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    &quot;Services&quot;
                  </strong>{" "}
                  refers to our autonomous mobile robot solutions, consulting,
                  and related offerings
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    &quot;User&quot;
                  </strong>{" "}
                  or{" "}
                  <strong className="font-semibold text-[#011f40]">
                    &quot;you&quot;
                  </strong>{" "}
                  refers to any individual or entity accessing our Website
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    &quot;Content&quot;
                  </strong>{" "}
                  refers to text, images, videos, and other materials on our
                  Website
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                3. USE OF OUR WEBSITE
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  3.1 Eligibility
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  You must be at least 18 years old to use our Website. By using
                  our Website, you represent that you are at least 18 years old.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  3.2 Permitted Use
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  You may use our Website for lawful purposes only, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Viewing information about our products and services</li>
                  <li>Contacting us for business inquiries</li>
                  <li>Applying for employment opportunities</li>
                  <li>Accessing publicly available resources</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  3.3 Prohibited Use
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  You agree not to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Use our Website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our Website</li>
                  <li>
                    Copy, distribute, or modify our Content without permission
                  </li>
                  <li>Use automated tools to access our Website</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                4. INTELLECTUAL PROPERTY
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  4.1 Our Content
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  All Content on our Website, including but not limited to text,
                  graphics, logos, images, and software, is owned by or licensed
                  to us and is protected by intellectual property laws. You may
                  not reproduce, distribute, or create derivative works without
                  our written permission.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  4.2 Trademarks
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  &quot;ANSCER&quot; and our logos are trademarks of ANSCER
                  ROBOTICS PVT LTD. You may not use our trademarks without
                  permission.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                5. USER CONTENT
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                If you submit content to us (such as through contact forms or job
                applications), you grant us a non-exclusive, royalty-free
                license to use, reproduce, and distribute that content for
                business purposes. You represent that you own or have rights to
                the content you submit.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                6. PRIVACY
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of our Website, to understand
                our practices.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                7. PRODUCTS AND SERVICES
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  7.1 Product Information
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  Product specifications and descriptions on our Website are for
                  informational purposes. We strive for accuracy but do not
                  guarantee that all information is complete or current.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  7.2 Pricing and Availability
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  Prices and availability of products are subject to change
                  without notice. We reserve the right to modify or discontinue
                  products.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  7.3 Orders and Contracts
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  Any purchase or service agreement will be governed by separate
                  terms provided at the time of purchase.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                8. DISCLAIMERS
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  8.1 No Warranties
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  Our Website and services are provided &quot;as is&quot;
                  without warranties of any kind. We disclaim all warranties,
                  express or implied, including merchantability and fitness for
                  a particular purpose.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  8.2 Limitation of Liability
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  To the maximum extent permitted by law, we shall not be liable
                  for any indirect, incidental, special, or consequential
                  damages arising from your use of our Website.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                9. INDEMNIFICATION
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                You agree to indemnify and hold us harmless from any claims,
                damages, or expenses arising from your use of our Website or
                violation of these Terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                10. TERMINATION
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We reserve the right to terminate or suspend your access to our
                Website at our discretion, without notice, for any reason.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                11. GOVERNING LAW
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes shall be resolved in the
                courts of Bengaluru, Karnataka.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                12. CHANGES TO TERMS
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We may update these Terms from time to time. We will notify you of
                changes by updating the &quot;Last Updated&quot; date. Your
                continued use of our Website constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                13. CONTACT INFORMATION
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                If you have questions about these Terms, please contact us:
              </p>

              <div className="rounded-xl border border-gray-100 bg-[#f8fafc] p-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <p>
                  <strong className="font-semibold text-[#011f40]">
                    Grievance Officer:
                  </strong>{" "}
                  Raghu Venkatesh
                </p>
                <p className="mt-1">
                  <strong className="font-semibold text-[#011f40]">
                    Designation:
                  </strong>{" "}
                  Chief Business Officer
                </p>
                <p className="mt-1">
                  <strong className="font-semibold text-[#011f40]">
                    Email:
                  </strong>{" "}
                  <a
                    href="mailto:info@anscer.com"
                    className="font-medium text-[#005ead] transition hover:underline"
                  >
                    info@anscer.com
                  </a>
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200/80">
                  <p className="font-semibold text-[#011f40]">Address:</p>
                  <p className="mt-1">
                    ANSCER ROBOTICS PVT LTD
                    <br />
                    Plot No 28B, 4th Main
                    <br />
                    Industrial Area
                    <br />
                    Bommasandra
                    <br />
                    Bengaluru, Karnataka 560099
                    <br />
                    India
                  </p>
                </div>

                <p className="mt-4 pt-4 border-t border-gray-200/80">
                  <strong className="font-semibold text-[#011f40]">
                    Website:
                  </strong>{" "}
                  <a
                    href="https://anscer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#005ead] transition hover:underline"
                  >
                    https://anscer.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
