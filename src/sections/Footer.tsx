import { Logo, SocialX, SocialInstagram, SocialYoutube, Instagram, LinkedIn, Whatsapp } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Logoo  from "../assets/logo.png";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "About Us" },
  { href: "#", title: "Pricing" },
  // { href: "#", title: "Blog" },
  { href: "#", title: "Contact Us" },
];

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Image src={Logoo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="font-medium">Premium Auto Spa</span>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            {/* <SocialX className="text-white/40 hover:text-white transition" />
            <SocialInstagram className="text-white/40 hover:text-white transition" />
            <SocialYoutube className="text-white/40 hover:text-white transition" /> */}
            <Image src={Instagram} alt="Instagram" className="cursor-pointer w-8 h-8 hover:opacity-100 opacity-70 transition" />
            <Image src={LinkedIn} alt="LinkedIn" className="cursor-pointer w-8 h-8 hover:opacity-100 opacity-70 transition" />
            <Image src={Whatsapp} alt="Whatsapp" className="cursor-pointer w-8 h-8 hover:opacity-100 opacity-70 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
