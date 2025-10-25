"use client";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/Button";
import { ArrowDown, Text } from "lucide-react";
import Link from "next/link";
import { TextTransition } from "./TextTransition";
import Hero from "../assets/avatar-4.png"
import Video from "next-video";
import Image from "next/image";
// import Hero from "../../videos/hero-section.mp4";

export const HeroSection = () => {
  return (
    <div className="relative">
    <video src={"https://res.cloudinary.com/dguf7s0iz/video/upload/v1761341187/hero-section_mxmzqq.mp4"} controls={false} loop muted autoPlay className="absolute z-0 inset-0 object-cover w-full h-[100%]">
    </video>
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <section className={`z-20 relative container w-full`}>
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience
              <span className="text-transparent px-2 bg-gradient-to-r from-[#0fa2da] to-[#c4f0fd] bg-clip-text">
                PAS
              </span>{" "}
              <span className="block text-gray-300 font-light text-xl">
                Premium Auto Spa
              </span>
              <TextTransition />
            </h1>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button>
              Contact US
              <ArrowDown className="size-5 inline ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button>
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Download App
              </Link>
            </Button>
          </div>
            {/* <Video src={"https://res.cloudinary.com/dguf7s0iz/video/upload/v1761341187/hero-section_mxmzqq.mp4"} className="w-[100vw] rounded-lg shadow-lg" controls={false} autoPlay muted loop /> */}
        </div>
      </div>
    </section>
    </div>
          );
};
