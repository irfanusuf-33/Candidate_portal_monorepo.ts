"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TypewriterEffect = ({
  words,
  className,
  blur = false,
}: {
  words: { text: string; className?: string }[]
  className?: string
  blur?: boolean
}) => {
  let charIndex = 0
  const allChars: { char: string; wordClassName?: string; index: number }[] = []

  words.forEach((word, wi) => {
    if (wi !== 0) allChars.push({ char: " ", wordClassName: word.className, index: charIndex++ })
    word.text.split("").forEach((char) => {
      allChars.push({ char, wordClassName: word.className, index: charIndex++ })
    })
  })

  return (
    <span className={cn("inline", className)}>
      {allChars.map((item) => (
        <motion.span
          key={item.index}
          initial={blur ? { opacity: 0, filter: "blur(10px)", y: 5 } : { opacity: 0 }}
          animate={blur ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 1 }}
          transition={{ delay: item.index * 0.06, duration: blur ? 0.4 : 0.01, ease: "easeOut" }}
          className={cn("inline-block", item.wordClassName)}
        >
          {item.char === " " ? "\u00A0" : item.char}
        </motion.span>
      ))}
    </span>
  )
}
