import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Unbotify",
  description: "Unbotify's privacy policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://unbotify.io/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-8 py-16">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 max-sm:flex-col">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="shrink-0 text-sm text-zinc-500">Effective Date: 23/02/2026</p>
      </div>

      {/* Introduction */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Introduction and organizational info</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We, at Unbotify Ltd, are dedicated to serving our customers and contacts to the best of our abilities. Part of
          our commitment involves the responsible management of personal information collected through our website
          unbotify.io, and any related interactions. Our primary goals in processing this information include:
        </p>
        <ul className="list-[square] space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
          <li>Enhancing the user experience on our platform by understanding customer needs and preferences.</li>
          <li>Providing timely support and responding to inquiries or service requests.</li>
          <li>Improving our products and services to meet the evolving demands of our users.</li>
          <li>Conducting necessary business operations, such as billing and account management.</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-700">
          It is our policy to process personal information with the utmost respect for privacy and security. We adhere
          to all relevant regulations and guidelines to ensure that the data we handle is protected against unauthorized
          access, disclosure, alteration, and destruction.
        </p>
        <ul className="list-[square] pl-5 text-sm leading-relaxed text-zinc-700">
          <li>
            We do not have a designated Data Protection Officer (DPO) but remain fully committed to addressing your
            privacy concerns. Should you have any questions or require further information about how we manage personal
            information, please feel free to contact us at{" "}
            <Link href="mailto:info@unbotify.io" className="text-orange-500 hover:underline">
              info@unbotify.io
            </Link>{" "}
            or +1-US 9706946727.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-700">
          Your privacy is our priority. We are committed to processing your personal information transparently and with
          your safety in mind. This commitment extends to our collaboration with third-party services that may process
          personal information on our behalf.
        </p>
      </section>

      {/* Scope */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Scope and application</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Our privacy policy is designed to protect the personal information of all our stakeholders, including website
          visitors, registered users, and customers. Whether you are just browsing our website unbotify.io, using our
          services as a registered user, or engaging with us as a valued customer, we ensure that your personal data is
          processed with the highest standards of privacy and security.
        </p>
      </section>

      {/* Data Collection */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Data collection and processing</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Our commitment to transparency and data protection extends to how we collect and use your personal
          information. We gather personal data through various interactions, including but not limited to, when you
          utilize our services or products such as Web Bot Protection, or directly provide information to us.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          The following list details the types of personal information we may process:
        </p>
        <ul className="list-[square] space-y-1 pl-5 text-sm font-semibold text-zinc-700">
          <li>First and last name</li>
          <li>IP address</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-700">
          Please note, that we only process information that is essential for delivering our services, complying with
          legal obligations, or enhancing your user experience.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          At Unbotify Ltd, we believe in using personal information responsibly and ethically. Here are the key ways in
          which we use the personal information collected:
        </p>
        <ul className="list-[square] space-y-1 pl-5 text-sm font-semibold text-zinc-700">
          <li>Authentication and security</li>
          <li>Customizing and adapting user experience</li>
          <li>Analytics and performance tracking</li>
          <li>Research and development</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-700">
          Your privacy is our priority. We process your personal information transparently and in accordance with your
          preferences and applicable privacy laws.
        </p>
      </section>

      {/* Data Storage */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Data storage and protection</h2>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Data storage</h3>
          <ul className="list-[square] space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
            <li>
              Personal information is stored in secure servers located in the following locations: US. For services that
              require international data transfer, we ensure that such transfers comply with all applicable laws.
            </li>
            <li>
              Data hosting partners: We partner with reputable data hosting providers committed to using
              state-of-the-art security measures, selected based on their adherence to stringent data protection
              standards.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Data protection measures</h3>
          <ul className="list-[square] space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
            <li>
              <strong>Encryption:</strong> To protect data during transfer and at rest, we employ robust encryption
              technologies.
            </li>
            <li>
              <strong>Access control:</strong> Access to personal information is strictly limited to authorized
              personnel who have a legitimate business need. We enforce strict access controls and regularly review
              permissions.
            </li>
            <li>
              <strong>Security audits and monitoring:</strong> Regular security audits are conducted to identify and
              remediate potential vulnerabilities. We also monitor our systems for unusual activities to prevent
              unauthorized access.
            </li>
          </ul>
        </div>
      </section>

      {/* Data Processing Agreements */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Data processing agreements</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          When we share your data with third-party service providers, we do so under the protection of Data Processing
          Agreements (DPAs) that ensure your information is managed in accordance with GDPR and other relevant data
          protection laws.
        </p>
        <h3 className="text-base font-semibold">Transparency and control</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          We believe in transparency and providing you with control over your personal information. You will always be
          informed about any significant changes to our sharing practices, and where applicable, you will have the
          option to consent to such changes.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          For any queries or concerns about how we share and disclose personal information, please reach out to us at{" "}
          <Link href="mailto:info@unbotify.io" className="text-orange-500 hover:underline">
            info@unbotify.io
          </Link>{" "}
          or +1-US 9706946727.
        </p>
      </section>

      {/* User Rights */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">User rights and choices</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          At Unbotify Ltd, we recognize and respect your rights regarding your personal information, in accordance with
          the General Data Protection Regulation (GDPR) and other applicable data protection laws.
        </p>
        <h3 className="text-base font-semibold">Your rights</h3>
        <ul className="list-[square] space-y-3 pl-5 text-sm leading-relaxed text-zinc-700">
          <li>
            <strong>Right of access</strong> (
            <Link
              href="https://gdpr.eu/article-15-right-of-access/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 15 GDPR
            </Link>
            ): You have the right to request access to the personal information we hold about you and to obtain
            information about how we process it.
          </li>
          <li>
            <strong>Right to rectification</strong> (
            <Link
              href="https://gdpr.eu/article-16-right-to-rectification/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 16 GDPR
            </Link>
            ): If you believe that any personal information we hold about you is incorrect or incomplete, you have the
            right to request its correction or completion.
          </li>
          <li>
            <strong>Right to erasure (&lsquo;right to be forgotten&rsquo;)</strong> (
            <Link
              href="https://gdpr.eu/article-17-right-to-be-forgotten/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 17 GDPR
            </Link>
            ): You have the right to request the deletion of your personal information when it is no longer necessary
            for the purposes for which it was collected.
          </li>
          <li>
            <strong>Right to restriction of processing</strong> (
            <Link
              href="https://gdpr.eu/article-18-right-to-restriction-of-processing/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 18 GDPR
            </Link>
            ): You have the right to request that we restrict the processing of your personal information under certain
            conditions.
          </li>
          <li>
            <strong>Right to data portability</strong> (
            <Link
              href="https://gdpr.eu/article-20-right-to-data-portability/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 20 GDPR
            </Link>
            ): You have the right to receive your personal information in a structured, commonly used, and
            machine-readable format.
          </li>
          <li>
            <strong>Right to object</strong> (
            <Link
              href="https://gdpr.eu/article-21-right-to-object/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 21 GDPR
            </Link>
            ): You have the right to object to the processing of your personal information, including processing for
            direct marketing.
          </li>
          <li>
            <strong>Right to withdraw consent</strong> (
            <Link
              href="https://gdpr.eu/article-7-how-to-get-consent-to-collect-personal-data/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 7(3) GDPR
            </Link>
            ): Where the processing of your personal information is based on your consent, you have the right to
            withdraw that consent at any time.
          </li>
          <li>
            <strong>Right to lodge a complaint</strong> (
            <Link
              href="https://gdpr.eu/article-77-right-to-lodge-a-complaint-with-a-supervisory-authority/"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Art. 77 GDPR
            </Link>
            ): You have the right to lodge a complaint with a supervisory authority if you believe our processing of
            your personal information violates applicable data protection laws.
          </li>
        </ul>
        <h3 className="text-base font-semibold">Exercising your rights</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          To exercise any of these rights, please contact us at{" "}
          <Link href="mailto:info@unbotify.io" className="text-orange-500 hover:underline">
            info@unbotify.io
          </Link>{" "}
          or +1-US 9706946727. We will respond to your request in accordance with applicable data protection laws and
          within the timeframes stipulated by those laws.
        </p>
      </section>

      {/* Cookies */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Cookies and tracking technologies</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          At Unbotify Ltd, we value your privacy and are committed to being transparent about our use of cookies and
          other tracking technologies on our website unbotify.io.
        </p>
        <h3 className="text-base font-semibold">Understanding cookies and tracking technologies</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          Cookies are small data files placed on your device that enable us to remember your preferences and collect
          information about your website usage. Tracking technologies, such as web beacons and pixel tags, help us
          understand how you interact with our site.
        </p>
        <h3 className="text-base font-semibold">How we use these technologies</h3>
        <ul className="list-[square] space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
          <li>
            <strong>Essential cookies:</strong> Necessary for the website&apos;s functionality, such as authentication
            and security. They do not require consent.
          </li>
          <li>
            <strong>Performance and analytics cookies:</strong> These collect information about how visitors use our
            website, which pages are visited most frequently, and if error messages are received.
          </li>
          <li>
            <strong>Functional cookies:</strong> Enable the website to provide enhanced functionality and
            personalization, like remembering your preferences.
          </li>
          <li>
            <strong>Advertising and targeting cookies:</strong> Used to deliver advertisements more relevant to you and
            your interests, and to measure the effectiveness of advertising campaigns.
          </li>
        </ul>
        <h3 className="text-base font-semibold">Your choices and consent</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          Upon your first visit, our website will present you with a cookie consent banner, where you can:
        </p>
        <ul className="list-[square] space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
          <li>
            <strong>Accept all cookies:</strong> Consent to the use of all cookies and tracking technologies.
          </li>
          <li>
            <strong>Reject non-essential cookies:</strong> Only essential cookies will be used to provide you with
            necessary website functions.
          </li>
          <li>
            <strong>Customize your preferences:</strong> Choose which categories of cookies you wish to allow.
          </li>
        </ul>
      </section>

      {/* US Privacy Laws */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Compliance with United States privacy laws</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          To appeal a decision we may make regarding your request, please contact us within 60 days of receiving our
          response by emailing{" "}
          <Link href="mailto:info@unbotify.io" className="text-orange-500 hover:underline">
            info@unbotify.io
          </Link>{" "}
          or calling 9706946727. In your appeal request, please include your original request, the date of our response,
          and a brief explanation of why you believe our decision was incorrect.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          For residents of the United States of America the following provisions apply:
        </p>

        <h3 className="text-base font-semibold">A. Individual rights</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          The California Consumer Privacy Act provides residents of California specific rights regarding their personal
          information, additional to what has been described before.
        </p>

        <h3 className="text-base font-semibold">B. Right to Know</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          You may request that we disclose to you what personal information we have collected, used, shared, or sold
          about you, and why we collected, used, shared, or sold that information. Specifically, you may request the
          disclosure of:
        </p>
        <ul className="list-[square] space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
          <li>The categories of personal information collected</li>
          <li>Specific pieces of personal information collected</li>
          <li>The categories of sources from which we collected personal information</li>
          <li>The purposes for which personal information is used</li>
          <li>The categories of third parties with whom personal information is shared</li>
          <li>The categories of information that are sold or disclosed to third parties</li>
        </ul>

        <h3 className="text-base font-semibold">C. Right to Delete</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          You may request that we delete personal information we have collected about you.
        </p>

        <h3 className="text-base font-semibold">D. Right to Correct</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          You may ask us to correct inaccurate information that we have about you.
        </p>

        <h3 className="text-base font-semibold">E. Right to Limit</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          You can request us to only use your sensitive personal information (for example, your social security number,
          your genetic data, etc.) for limited purposes, such as providing you with the services you requested.
        </p>

        <h3 className="text-base font-semibold">F. Right to Opt-Out</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          Unbotify Ltd does not sell or share personal information. In case your data is sold or shared you can make use
          of your right to opt-out of the sale or sharing of personal information by submitting your request through the
          link on our website.
        </p>

        <h3 className="text-base font-semibold">G. Right to Non-Discrimination</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          You have the right to be protected from discrimination for exercising your rights.
        </p>

        <h3 className="text-base font-semibold">H. Submitting requests</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          You may submit your request by sending an email to{" "}
          <Link href="mailto:info@unbotify.io" className="text-orange-500 hover:underline">
            info@unbotify.io
          </Link>{" "}
          or by phone at +1-US 9706946727. We will compare the information you submit to us with the information we have
          in our records to verify your request.
        </p>

        <h3 className="text-base font-semibold">J. Sensitive data and/or biometric data</h3>
        <p className="text-sm leading-relaxed text-zinc-700">
          We only process sensitive personal data with your prior consent and only for specific purposes that are
          clearly disclosed at the time of collection. You may withdraw your consent at any time by submitting your
          request through the link on our website or by email to{" "}
          <Link href="mailto:info@unbotify.io" className="text-orange-500 hover:underline">
            info@unbotify.io
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
