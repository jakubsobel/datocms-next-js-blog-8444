import {  motion } from "framer-motion";

export default function PostTitle({ title, children }) {
  return (
    <motion.h1
      className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      layoutId={`title-${title}`}
      key={`title-${title}`}>
      {children}
    </motion.h1>
  )
}
