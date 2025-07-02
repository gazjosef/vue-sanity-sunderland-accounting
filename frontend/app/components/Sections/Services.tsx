"use client";
import React from "react";
import {
  FaAngleUp,
  FaPencilAlt,
  FaBriefcase,
  FaPaperclip,
} from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import Box from "../Snippets/Box";

const Services: React.FC = () => {
  const [servicesIntroRef] = useGsapFadeIn();

  return (
    <section id="services" className="py-20 bg-white text-black">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8">
        {/* Intro Section */}
        <div
          ref={servicesIntroRef}
          className="flex flex-col justify-start xl:col-span-1 md:col-span-2 space-y-4 text-right xl:text-right md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase leading-tight">
            Providing you comprehensive tax, accounting and payroll services.
          </h2>
          <p className="text-base">
            We offer a customised approach to meet the specific needs of each of
            our clients and strive to provide the highest level of quality and
            efficiency in all that we do.
          </p>
          <p className="text-base">
            We understand the importance of staying compliant with tax laws and
            regulations, and work closely with our clients to help them make
            informed financial decisions.
          </p>
        </div>

        {/* Service Boxes */}
        <Box
          title="Tax Accounting & Preparation"
          description="Our team of certified tax professionals have a deep understanding of the tax code and are equipped to handle all of your tax-related needs."
        >
          <FaAngleUp className="text-blue-800" size={48} aria-hidden="true" />
        </Box>

        <Box
          title="Financial Reporting"
          description="Our Financial Reporting Services go beyond numbers, providing comprehensive insights into your business financial health."
        >
          <FaPencilAlt className="text-blue-800" size={48} aria-hidden="true" />
        </Box>

        <Box
          title="Bookkeeping Services"
          description="We provide a range of bookkeeping services, including ledger maintenance, invoicing, and expense tracking, allowing you to tailor our services to fit your business model seamlessly."
        >
          <FaBriefcase className="text-blue-800" size={48} aria-hidden="true" />
        </Box>

        <Box
          title="Payroll Services"
          description="We take care of the entire payroll cycle, from data entry to tax filing. Whether you are a small business owner or part of a larger organisation, our services scale to meet your payroll needs."
        >
          <FaPaperclip className="text-blue-800" size={48} aria-hidden="true" />
        </Box>
      </div>
    </section>
  );
};

export default Services;
