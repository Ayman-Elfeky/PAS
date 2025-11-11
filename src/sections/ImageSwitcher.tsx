"use client";
import {
    Befaf,
    Services
} from '@/assets'

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageSwitcher() {
  const [showFirst, setShowFirst] = useState(true);

  // Automatically toggle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative container w-[60%] h-[400px] overflow-hidden rounded-2xl mt-10">
      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            key="befaf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={Befaf}
              alt="Before and After"
              fill
              className="rounded-2xl"
              priority
            />
          </motion.div>
        ) : (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={Services}
              alt="Services"
              fill
              className="rounded-2xl"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
