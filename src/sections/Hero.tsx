"use client";
import { Button } from "@/components/Button";
import { StarsImage } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextTransition } from "./TextTransition";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${StarsImage.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: StarsImage.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 100,
        ease: "linear",
      }}
    >
      {/* Updated background overlay for a darker, more premium look */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(15,162,218,0.15)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

      {/* Start Planet (re-designed with gradient and refined shadow) */}
      <div className="absolute size-64 md:size-96 border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,#C4F0FD,rgba(15,162,218,1)_37.7%,rgb(14,0,36))] shadow-[0_0_50px_rgba(15,162,218,0.25)] rounded-full"></div>
      {/* End Planet */}

      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[344px] md:size-[580px] border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-5 border border-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute size-2 bg-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </motion.div>
      {/* End Ring 3 */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter text-center bg-white bg-gradient-to-b from-[#C4F0FD] to-[#0FA2DA] text-transparent bg-clip-text">
          PAS
        </h1>
        <p className="text-lg md:text-xl text-white mt-5 text-center max-w-xl mx-auto">
          Premium Auto Spa
        </p>
          <TextTransition />
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
