export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-16 text-sm text-white">
      &copy; <span className="text-[#ffb199]">{currentYear}</span> Sunderland
      Accounting. All rights reserved.
    </div>
  );
}
