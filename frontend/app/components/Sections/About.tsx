"use client";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";

const About: React.FC = () => {
  const [aboutTitleRef, aboutTextRef] = useGsapFadeIn();

  return (
    <section
      id="about"
      className="py-16 px-4 text-white tracking-wide bg-black"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          ref={aboutTitleRef}
          className="text-right md:col-span-1 col-span-full"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase">
            About Us
          </h2>
        </div>

        <div
          ref={aboutTextRef}
          className="md:col-span-2 col-span-full text-base space-y-6"
        >
          <p>
            We are a professional accounting firm dedicated to providing
            top-notch financial services to businesses and individuals. Our team
            of experts has a combined experience of several decades in the field
            of accounting and finance. We offer a wide range of services
            including bookkeeping, tax planning and preparation, financial
            statement analysis, and consulting.
          </p>
          <p>
            Our goal is to help our clients make informed financial decisions,
            stay compliant with tax laws, and achieve their financial goals. We
            are committed to providing personalized, timely and efficient
            services at an affordable price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
