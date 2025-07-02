"use client";
import React from "react";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import Form from "../Snippets/Form";
import Map from "../Snippets/Map";
import ContactDetails from "../Snippets/ContactDetails";

export default function Contact(): JSX.Element {
  const [contactTitleRef, contactMapRef] = useGsapFadeIn();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={contactTitleRef} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            Contact Us
          </h2>
        </div>

        <div
          ref={contactMapRef}
          className="grid grid-cols-2 grid-rows-[auto_auto_auto] border border-black/20 md:grid-cols-1"
        >
          {/* Map */}
          <div className="col-span-2">
            <Map />
          </div>

          {/* Contact Form */}
          <div className="p-8 order-3 md:order-2">
            <Form />
          </div>

          {/* Contact Details */}
          <div className="p-8 order-2 md:order-3">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
