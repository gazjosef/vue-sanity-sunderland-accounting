import React from "react";
import Link from "next/link";
import Header from "../Layout/Header/Header";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] text-white text-center overflow-hidden"
    >
      {/* Responsive background image */}
      <picture>
        <source
          media="(min-width: 2048px)"
          srcSet="/images/bg/city-bg-4096w.jpg"
        />
        <source
          media="(min-width: 1600px)"
          srcSet="/images/bg/city-bg-1600w.jpg"
        />
        <source
          media="(min-width: 1200px)"
          srcSet="/images/bg/city-bg-1200w.jpg"
        />
        <source
          media="(min-width: 800px)"
          srcSet="/images/bg/city-bg-800w.jpg"
        />
        <source
          media="(min-width: 400px)"
          srcSet="/images/bg/city-bg-400w.jpg"
        />
        <img
          src="/images/bg/city-bg-800w.jpg"
          alt="City skyline background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          //   fetchpriority="high"
        />
      </picture>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />

      <Header />

      <div className="relative z-20 container mx-auto grid place-content-center min-h-[calc(100vh-4rem)] px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
          SMARTER WAY TO FILE TAX RETURN
          <span className="block text-lg sm:text-xl font-medium mt-2 tracking-wide">
            IN PERSON. BY PHONE. ONLINE
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
          We help lodging tax return Sydney from anywhere. Get your biggest tax
          refund with no tax knowledge needed.
        </p>

        <Link
          href="#"
          className="inline-block bg-white text-black px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide hover:bg-gray-200 transition"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
};

export default Hero;
