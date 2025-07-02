import React from "react";
import Image from "next/image";

export interface TeamMemberProps {
  name: string;
  position: string;
  image_src: string;
}

export default function TeamMember({
  name,
  position,
  image_src,
}: TeamMemberProps): JSX.Element {
  return (
    <article
      className="border border-gray-300 rounded-md overflow-hidden flex flex-col items-center text-center p-6 shadow-sm"
      aria-label={`${name} - ${position}`}
    >
      <div className="mb-4">
        <Image
          src={image_src}
          alt={`Portrait of ${name}`}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{position}</p>
      </div>
    </article>
  );
}
