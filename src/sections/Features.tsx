"use client";
import { ProductImage } from "@/assets";
import { AcmeLogo } from "@/assets";
import { Avatar1 } from "@/assets";
import { featuresTabs } from "@/data/data";
import {
  animate,
  motion,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useState } from "react";
import FeatureTab from "@/components/FeatureTab";
import Pricing from "@/components/Pricing";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Features = () => {
   const [currentTab, setCurrentTab] = useState<number>(0);
  const [animateDirection, setAnimateDirection] = useState<'left' | 'right'>('right');

  const backgroundPositionX = useMotionValue(
    featuresTabs[0].backgroundPositionX,
  );
  const backgroundPositionY = useMotionValue(
    featuresTabs[0].backgroundPositionY,
  );
  const backgroundSizeX = useMotionValue(featuresTabs[0].backgroundSizeX);

  // const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  // const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, featuresTabs[tabIndex].backgroundSizeX],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), featuresTabs[tabIndex].backgroundPositionX],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), featuresTabs[tabIndex].backgroundPositionY],
      animateOptions,
    );
  };

  const handlePrev = () => {
    setAnimateDirection('right');
    setCurrentTab((prev) => (prev > 0 ? prev - 1 : featuresTabs.length - 1));
  };

  const handleNext = () => {
    setAnimateDirection('left');
    setCurrentTab((prev) => (prev < featuresTabs.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-0 md:py-10">
      <div className="relative container">
        {/* headings */}
        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          {featuresTabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tabIndex}
              {...tab}
              onClick={() => {
                setAnimateDirection(tabIndex > currentTab ? 'right' : 'left');
                handleSelectTab(tabIndex);
              }}
              selected={currentTab === tabIndex}
            />
          ))}
        </div>

        {/* <button
          onClick={handlePrev}
          className="absolute left-2 right-2 top-[550px] -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button> */}

        {/* Animated Pricing card */}
        <div className="relative p-2.5 border border-white/20 rounded-xl mt-3 w-[80%] md:w-[50%] mx-auto overflow-hidden">
          <div key={currentTab} className={`pricing-slide ${animateDirection}`}>
            <Pricing currentTab={currentTab} />
          </div>
        </div>

        {/* <button
          onClick={handleNext}
          className="absolute right-2 top-[550px] -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button> */}
      </div>
    </section>
  );
};
