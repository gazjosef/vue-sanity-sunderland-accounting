import React from "react";
import TeamMember, { TeamMemberProps } from "../Snippets/TeamMember";

const team: TeamMemberProps[] = [
  {
    name: "Jamie Ryder",
    position: "Founding Partner & Chairman",
    image_src: "/images/team/ellipse-150x150/jamie-ryder.png",
  },
  {
    name: "Jenete Ekwueme",
    position: "Managing Partner",
    image_src: "/images/team/ellipse-150x150/jenete-ekwueme.png",
  },
  {
    name: "Vihrat Singh",
    position: "Accounting & Tax Manager",
    image_src: "/images/team/ellipse-150x150/vihrat-singh.png",
  },
  {
    name: "Isabella Telfer",
    position: "Associate Director",
    image_src: "/images/team/ellipse-150x150/isabella-telfer.png",
  },
];

export default function Gallery(): JSX.Element {
  return (
    <section id="team" className="py-20 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image_src={member.image_src}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
