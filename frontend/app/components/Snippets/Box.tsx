import React from "react";

interface BoxProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Box({ children, title, description }: BoxProps) {
  return (
    <section className="flex flex-col justify-between p-6 border border-gray-300 min-h-[20rem] shadow-sm rounded-md">
      <div className="mb-4">{children}</div>
      <div>
        <h3 className="text-xl font-semibold uppercase mb-2">{title}</h3>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </section>
  );
}
