import { MenuIcon } from "@/assets";
import Logoo  from "../assets/logo.png";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "About Us" },
  { href: "#", title: "Pricing" },
  { href: "#", title: "Contact US" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 border-b border-white/15 md:border-none z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="relative flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="inline-flex items-center justify-center size-10 border border-white/15 rounded-lg">
              <Image src={Logoo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
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
          <div className="flex items-center gap-4">
            <Button>Download App <span className="block font-sm">Coming Soon!</span></Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
