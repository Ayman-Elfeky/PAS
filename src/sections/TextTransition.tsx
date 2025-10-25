"use client"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"

export const TextTransition = ({
    // text="Experience",
    words = ["The best car wash service at home","Exclusive Car Detailing and Spa"],
}: {
  text: string
  words: string[]
}) => {
  const [index, setIndex] = React.useState(0)
 
React.useEffect(() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % words.length)
}, 5000)
// Clean up interval on unmount
return () => clearInterval(interval)
}, [])
return (

<div className="text-sm mt-4 text-gray-400 text-center sm:text-4xl font-bold md:text-2xl md:leading-[2rem] w-fit flex items-center justify-center mx-auto gap-1.5">
  {/* <span className="text-white">{text}</span> */}
  <AnimatePresence mode="wait">
    <motion.p
      key={words[index]}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
    >
      {words[index]}
    </motion.p>
  </AnimatePresence>
</div>
)}