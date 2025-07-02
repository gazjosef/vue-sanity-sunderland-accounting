import FooterSocialMediaIcons from "./FooterSocialMediaIcons";
import FooterList from "./FooterList";
import FooterCopyright from "./FooterCopyright";

const links1 = ["Home", "Our Services", "About Us"];
const links2 = ["Contact Us", "Terms", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
        {/* Logo & Social Icons */}
        <div>
          <h2 className="text-xl font-semibold uppercase mb-4">
            Sunderland Accounting
          </h2>
          <FooterSocialMediaIcons />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8 justify-end">
          <FooterList links={links1} />
          <FooterList links={links2} />
        </div>
      </div>

      {/* Copyright */}
      <FooterCopyright />
    </footer>
  );
}
