import { Whatsapp } from "@/assets";
import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header"; 
import { HeroSection } from "@/sections/HeroSection";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
    <Link href="https://wa.me/+201210007708" target="_blank" rel="noopener noreferrer">
      <Image src={Whatsapp} alt="WhatsApp" className="cursor-pointer fixed bottom-4 right-4 w-16 h-10 z-50"/>
    </Link>
      <Header />
      {/* <Hero /> */}
      <HeroSection />
      <LogoTicker />
      <Testimonials />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
