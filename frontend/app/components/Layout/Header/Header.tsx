"use client";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="w-full h-32 px-4 sm:px-16 absolute top-0 border-b border-white/10 text-white uppercase">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href="/" passHref>
          <h1 className="text-2xl tracking-widest font-semibold cursor-pointer">
            Sunderland Accounting
          </h1>
        </Link>

        <Navbar />
      </div>
    </header>
  );
}
