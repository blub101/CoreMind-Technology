import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - CoreMind Technology</title>
        <meta
          name="description"
          content="Read the Privacy Policy of CoreMind Technology explaining how we collect, use, and protect your data."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Privacy Policy, Data Protection, CoreMind Technology, User Privacy"
        />
        <link rel="canonical" href="https://yourdomain.com/privacy-policy" />
      </Helmet>

      <Header />

      <section className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mt-20 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          At CoreMind Technology, we respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Information We Collect
        </h2>
        <p className="mb-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          We may collect information about you in a variety of ways, including:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-300 text-base sm:text-lg leading-relaxed space-y-1">
          <li>Personal Data such as name, email address, contact information.</li>
          <li>Usage Data such as browsing behavior, IP address, device information.</li>
          <li>Cookies and Tracking Technologies.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          How We Use Your Information
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-300 text-base sm:text-lg leading-relaxed space-y-1">
          <li>Provide, operate, and maintain our website and services.</li>
          <li>Improve user experience and site functionality.</li>
          <li>Communicate with you, including sending marketing and promotional materials.</li>
          <li>Monitor and analyze usage and trends to improve the website.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Cookies and Tracking Technologies
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          We use cookies and similar tracking technologies to track activity on our website and hold certain information.
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Sharing Your Information
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          We do not sell, trade, or rent your personal information to others. We may share information with trusted third parties to help us operate our website and provide services.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Your Data Protection Rights
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          Depending on your location, you may have rights regarding your personal data, including access, correction, deletion, and portability.
          Please contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Security of Your Information
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          We use administrative, technical, and physical security measures to help protect your personal information.
          However, no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
          Your continued use of the site after modifications will constitute your acknowledgment of the changes.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">
          Contact Us
        </h2>
        <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          If you have questions or comments about this policy, please contact us at{" "}
          <a href="mailto:support@coremind.com" className="text-[var(--theme-primary)] underline">
            coremindtechnology@gmail.com
          </a>
          .
        </p>
      </section>

      <Footer />
    </>
  );
}
