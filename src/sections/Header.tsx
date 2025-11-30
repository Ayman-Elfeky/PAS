"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react"; // You can use any close icon
import Logoo from "../assets/logo.png";
import Log from "../assets/LOGO-Opt.jpg";
import Logo from "../assets/Logo-OOPT.jpg";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "https://wa.me/+201210007708", title: "About Us" },
  { href: "https://wa.me/+201210007708", title: "Pricing" },
  { href: "https://wa.me/+201210007708", title: "Contact Us" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 py-4 sm:py-6 border-none z-10 bg-black/40 backdrop-blur-lg">
      <div className="relative flex justify-between items-center md:p-2.5 rounded-xl max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="w-24 h-16 object-contain" />
          <h1 className="text-2xl font-bold hidden md:block text-white">
            Premium Auto Spa
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav className="flex gap-8 text-sm border border-white/15 py-4 px-4 rounded-lg bg-white/5 backdrop-blur">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Button + Menu Icon */}
        <div className="flex items-center gap-4">
          <Button>
            Download App{" "}
            <span className="block font-small font-thin text-gray-400">
              Coming Soon!
            </span>
          </Button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full -z-50 bg-black/90 backdrop-blur-lg p-6 flex flex-col items-center gap-6 md:hidden transition-all duration-300">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 text-lg hover:text-white transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
