'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface KineticHeadlineProps {
  text: string
  className?: string
}

export function KineticHeadline({ text, className }: KineticHeadlineProps) {
  const words = text.split(' ')
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
