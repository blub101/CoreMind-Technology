import React from "react";
import { Helmet } from "react-helmet";

const SeoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CoreMind Technology - Affordable IT Solutions & Services</title>

        <meta
          name="description"
          content="CoreMind Technology offers affordable and innovative IT solutions including web development, app development, digital marketing, and UI/UX design. Grow your business with us!"
        />

        <meta
          name="keywords"
          content="IT solutions, affordable IT services, web development, app development, digital marketing, UI/UX design, CoreMind Technology, software development"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.yourdomain.com/seo" />

        {/* Open Graph / Social Media tags */}
        <meta property="og:title" content="CoreMind Technology - Affordable IT Solutions" />
        <meta
          property="og:description"
          content="Innovative and affordable IT services for businesses of all sizes. Web, mobile, marketing & design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com/seo" />
        <meta property="og:image" content="https://www.yourdomain.com/images/seo-og-image.png" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CoreMind Technology - Affordable IT Solutions" />
        <meta
          name="twitter:description"
          content="Grow your business with our web development, app development, digital marketing, and UI/UX services."
        />
        <meta name="twitter:image" content="https://www.yourdomain.com/images/seo-twitter-image.png" />
      </Helmet>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">
          Affordable IT Solutions & Services by CoreMind Technology
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Web Development:</strong> Custom websites tailored to your business needs.</li>
            <li><strong>App Development:</strong> Mobile applications for Android and iOS platforms.</li>
            <li><strong>Digital Marketing:</strong> Boost your online presence and grow your audience.</li>
            <li><strong>UI/UX Design:</strong> User-friendly and attractive interface design.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose CoreMind Technology?</h2>
          <p className="mb-4 text-lg leading-relaxed">
            At CoreMind Technology, we believe in delivering high-quality, affordable, and innovative IT solutions
            that help businesses automate processes, grow faster, and make smarter decisions.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Our expert team uses the latest technologies and industry best practices to provide services
            that match your unique requirements.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Whether you are a startup or an established enterprise, our solutions are designed to scale with your business.
          </p>
        </section>
      </main>
    </>
  );
};

export default SeoPage;
