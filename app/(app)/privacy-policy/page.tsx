import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "../components/animation";

export const metadata: Metadata = {
  title: "Privacy Policy | ANSCER Robotics",
  description:
    "Read the official ANSCER Robotics privacy policy. Understand how we collect, protect, and handle your data across our platforms and digital services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#011f40] pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="site-container max-w-[860px]">
        <FadeUp>
          {/* Header */}
          <h1 className="text-3xl font-bold tracking-tight text-[#011f40] md:text-4xl lg:text-[42px]">
            Privacy Policy
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
                1. INTRODUCTION
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                ANSCER ROBOTICS PVT LTD (&quot;Company,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) operates the website{" "}
                <Link
                  href="/"
                  className="font-medium text-[#005ead] transition hover:underline"
                >
                  https://anscer.com
                </Link>{" "}
                (&quot;Website&quot;). We are committed to protecting your
                privacy and ensuring you have a positive experience on our
                Website. This Privacy Policy explains how we collect, use,
                disclose, and safeguard information when you visit our Website and
                interact with us.
              </p>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                <strong className="font-semibold text-[#011f40]">
                  Registered Address:
                </strong>{" "}
                Plot No 28B, 4th Main, Industrial Area, Bommasandra, Bengaluru,
                Karnataka 560099, India
              </p>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                Please read this Privacy Policy carefully. If you do not agree
                with our policies and practices, please do not use our Website.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                2. INFORMATION WE COLLECT
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We collect information in the following ways:
              </p>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  2.1 Information You Provide Directly
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  When you use our Website, you may voluntarily provide us with
                  personal information including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>
                    Company Information (for job applications and business
                    inquiries)
                  </li>
                  <li>Messages submitted through our contact forms</li>
                  <li>Inquiries via our live chat widget</li>
                </ul>
                <p className="pt-2 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  This information is collected when you:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Submit contact/enquiry forms</li>
                  <li>Register for our jobs portal</li>
                  <li>Use our live chat widget</li>
                  <li>Apply for positions</li>
                  <li>Subscribe to updates or marketing communications</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  2.2 Information Collected Automatically
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  When you visit our Website, we automatically collect certain
                  technical information, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>IP Address</li>
                  <li>Browser Type and Version</li>
                  <li>Device Information (operating system, device type)</li>
                  <li>
                    Approximate Geographic Location (based on IP address)
                  </li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referral source and navigation patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
                <p className="pt-2 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  This information is collected through:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Google Analytics</li>
                  <li>Zoho SalesIQ (live chat and visitor tracking)</li>
                  <li>Web server logs</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  2.3 Information from Third Parties
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  We may receive information about you from third-party service
                  providers we use for business operations.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                3. HOW WE USE YOUR INFORMATION
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We use the personal information we collect for the following
                purposes:
              </p>
              <ul className="list-disc space-y-2.5 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Responding to Inquiries:
                  </strong>{" "}
                  To answer your questions, respond to support requests, and
                  address your concerns
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Job Applications:
                  </strong>{" "}
                  To process job applications and recruitment for our jobs
                  portal
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Providing Services:
                  </strong>{" "}
                  To deliver requested information, services, and support
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Marketing Communications:
                  </strong>{" "}
                  To send you marketing emails and updates about our products,
                  services, and business offerings (with your consent)
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Live Chat Support:
                  </strong>{" "}
                  To provide customer support and assistance via our live chat
                  widget
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Analytics and Improvement:
                  </strong>{" "}
                  To analyze Website usage patterns, improve user experience, and
                  optimize Website functionality
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Legal Compliance:
                  </strong>{" "}
                  To comply with legal obligations, law enforcement requests,
                  and regulatory requirements
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Business Operations:
                  </strong>{" "}
                  To maintain business records, invoicing, and tax compliance
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                4. LEGAL BASIS FOR PROCESSING (DPDP ACT COMPLIANCE)
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                As we operate in India, we comply with the Digital Personal Data
                Protection Act, 2023 (&quot;DPDP Act&quot;). We process your
                personal data based on the following legal grounds:
              </p>
              <ul className="list-disc space-y-2.5 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Consent:
                  </strong>{" "}
                  Explicit consent for marketing emails, WhatsApp messages, and
                  analytics
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Legitimate Business Interests:
                  </strong>{" "}
                  To respond to inquiries, provide services, and improve our
                  Website
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Contractual Necessity:
                  </strong>{" "}
                  To process job applications and business relationships
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Legal Compliance:
                  </strong>{" "}
                  To comply with applicable laws and regulations in India
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                5. COOKIES AND TRACKING TECHNOLOGIES
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                Our Website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>Enhance user experience</li>
                <li>Remember your preferences</li>
                <li>Track Website analytics through Google Analytics</li>
                <li>
                  Enable Zoho SalesIQ functionality for live chat and visitor
                  insights
                </li>
              </ul>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                You can control cookie settings through your browser preferences.
                However, disabling cookies may affect Website functionality.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                6. THIRD-PARTY SERVICE PROVIDERS
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We share necessary information with the following third-party
                service providers to operate our Website and serve you better:
              </p>
              <ul className="list-disc space-y-2.5 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Google Analytics:
                  </strong>{" "}
                  For Website analytics and user behavior tracking
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Zoho SalesIQ:
                  </strong>{" "}
                  For live chat support and visitor analytics
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Zoho CRM:
                  </strong>{" "}
                  For managing customer inquiries and business relationships
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Web Hosting Providers:
                  </strong>{" "}
                  Located in the United States and India
                </li>
              </ul>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                These service providers are bound by confidentiality agreements
                and are permitted to use your information only as necessary to
                provide services to us.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                7. DATA SHARING AND DISCLOSURE
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  7.1 When We May Share Your Information
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  We do not share or sell your personal information to third
                  parties for their marketing purposes. However, we may disclose
                  your information in the following circumstances:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>
                    <strong className="font-semibold text-[#011f40]">
                      Legal Requirements:
                    </strong>{" "}
                    When required by law, court order, or government agency
                    request
                  </li>
                  <li>
                    <strong className="font-semibold text-[#011f40]">
                      Law Enforcement:
                    </strong>{" "}
                    To comply with legal process or protect against fraud,
                    security, or technical issues
                  </li>
                  <li>
                    <strong className="font-semibold text-[#011f40]">
                      Business Operations:
                    </strong>{" "}
                    With service providers who assist us in operating our Website
                    and conducting our business (as listed in Section 6)
                  </li>
                  <li>
                    <strong className="font-semibold text-[#011f40]">
                      Subsidiaries:
                    </strong>{" "}
                    With our subsidiary entities as part of our corporate group
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  7.2 International Data Transfers
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  Your personal data may be transferred to, stored in, and
                  processed in countries other than India, including the United
                  States. These transfers are necessary for Website operations and
                  service delivery. By using our Website, you consent to such
                  transfers.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                8. DATA RETENTION
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We retain your personal information for the following periods:
              </p>
              <ul className="list-disc space-y-2.5 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Contact Inquiries:
                  </strong>{" "}
                  Until you request deletion or opt-out via email
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Job Applications:
                  </strong>{" "}
                  Until the recruitment process concludes; candidates may
                  request deletion at any time
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Marketing Contacts:
                  </strong>{" "}
                  Until you opt-out or withdraw consent
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Live Chat Records:
                  </strong>{" "}
                  Retained for support and quality purposes; can be deleted upon
                  request
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Analytics Data:
                  </strong>{" "}
                  Retained per Google Analytics and Zoho retention policies
                </li>
                <li>
                  <strong className="font-semibold text-[#011f40]">
                    Account Data:
                  </strong>{" "}
                  Retained until account deletion is requested or your
                  relationship with us ends
                </li>
              </ul>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                You may request deletion or data retention changes at any time by
                contacting us (see Section 11).
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                9. MARKETING COMMUNICATIONS AND OPT-OUT
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  9.1 Email Marketing
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  We send marketing emails about our services, products,
                  updates, and business offerings. You have the right to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>
                    Opt-out by clicking the unsubscribe link in any marketing
                    email
                  </li>
                  <li>
                    Request removal from our mailing list by emailing{" "}
                    <a
                      href="mailto:info@anscer.com"
                      className="font-medium text-[#005ead] transition hover:underline"
                    >
                      info@anscer.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  9.2 WhatsApp and SMS
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  If you have opted into WhatsApp or SMS communications, you can
                  opt-out by:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Replying &quot;STOP&quot; to any message</li>
                  <li>
                    Emailing{" "}
                    <a
                      href="mailto:info@anscer.com"
                      className="font-medium text-[#005ead] transition hover:underline"
                    >
                      info@anscer.com
                    </a>{" "}
                    with your request to unsubscribe
                  </li>
                </ul>
                <p className="pt-2 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  All marketing communications will include clear opt-out
                  instructions.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                10. DATA SECURITY
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We implement reasonable technical, organizational, and
                administrative security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction. These measures include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                <li>Secure socket layer (SSL) encryption for data transmission</li>
                <li>Restricted access to personal information</li>
                <li>Regular security assessments</li>
                <li>Secure hosting infrastructure</li>
              </ul>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                However, no method of data transmission over the Internet is
                100% secure. While we strive to protect your information, we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                11. YOUR RIGHTS AND CONTACT INFORMATION
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  11.1 Your Rights
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  Under the Digital Personal Data Protection Act, 2023, and
                  applicable privacy laws, you have the right to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <li>Request access to your personal data we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>
                    Request deletion of your personal data (subject to legal
                    obligations)
                  </li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Opt-out of data processing for specific purposes</li>
                  <li>
                    Request information about our data processing practices
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-semibold text-[#011f40]">
                  11.2 How to Exercise Your Rights
                </h3>
                <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                  To exercise any of these rights, please contact us using the
                  information below:
                </p>

                <div className="rounded-xl border border-gray-100 bg-[#f8fafc] p-6 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  <p>
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
                    <p className="font-semibold text-[#011f40]">
                      Postal Address:
                    </p>
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
                </div>

                <p className="pt-2 text-base leading-relaxed text-[#363636] md:text-[16px]">
                  We will respond to your request within 30 days in accordance
                  with applicable laws.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                12. CHILDREN&apos;S PRIVACY
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                Our Website is not directed to individuals under 18 years of
                age. We do not knowingly collect personal information from
                minors. If we become aware that we have collected information from
                a minor without appropriate parental consent, we will take steps
                to delete such information and terminate the minor&apos;s
                account. If you believe we have collected information from a
                minor, please contact us immediately.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                13. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or other factors.
                We will notify you of material changes by updating the
                &quot;Last Updated&quot; date at the top of this policy. Your
                continued use of our Website following the posting of changes
                constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Section 14 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#011f40] md:text-2xl">
                14. CONTACT US
              </h2>
              <p className="text-base leading-relaxed text-[#363636] md:text-[16px]">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us:
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
                  <p className="font-semibold text-[#011f40]">
                    Mailing Address:
                  </p>
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
                    India.
                  </p>
                </div>

                <p className="mt-4 pt-4 border-t border-gray-200/80">
                  <strong className="font-semibold text-[#011f40]">
                    Website:
                  </strong>{" "}
                  <Link
                    href="/"
                    className="font-medium text-[#005ead] transition hover:underline"
                  >
                    https://anscer.com
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
