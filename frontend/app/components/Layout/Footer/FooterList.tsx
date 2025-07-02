interface FooterListProps {
  links: string[];
}

export default function FooterList({ links }: FooterListProps) {
  return (
    <ul className="space-y-2 text-sm font-light uppercase">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="hover:underline">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
