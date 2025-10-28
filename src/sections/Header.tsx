import { MenuIcon } from "@/assets";
import Logoo  from "../assets/logo.png";
import Log from "../assets/LOGO-Opt.jpg";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  // { href: "#", title: "Features" },
  { href: "#", title: "About Us" },
  { href: "#", title: "Pricing" },
  { href: "https://wa.me/+201210007708", title: "Contact US" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 md:py-6 border-none z-10">
      {/* <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div> */}
      <div className="">
        <div className="relative flex justify-between items-center md:p-2.5 rounded-xl max-w-6xl mx-auto">
          {/* <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div> */}
          <div className="flex items-center gap-2">
            {/* <div className="size-20 border border-white/15 rounded-lg"> */}
              <Image src={Logoo} alt="Logo" className="w-24 h-16 object-contain" />
              <h1 className="text-2xl font-bold md:hidden">Premium Auto Spa</h1>
            {/* </div> */}
          </div>
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
          <div className="flex items-center gap-4">
            <Button>Download App <span className="block font-small font-thin font-gray-500">Coming Soon!</span></Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
