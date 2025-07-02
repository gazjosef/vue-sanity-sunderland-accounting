import { FaFacebook, FaLinkedin, FaGooglePlusG } from "react-icons/fa";

export default function FooterSocialMediaIcons() {
  return (
    <div className="flex justify-start gap-6 mt-2 text-xl">
      <a href="#" aria-label="Facebook" className="hover:text-blue-500">
        <FaFacebook />
      </a>
      <a href="#" aria-label="Google Plus" className="hover:text-red-500">
        <FaGooglePlusG />
      </a>
      <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
        <FaLinkedin />
      </a>
    </div>
  );
}
