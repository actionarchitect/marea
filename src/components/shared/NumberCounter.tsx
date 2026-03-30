'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView, motion } from 'framer-motion'

interface NumberCounterProps {
  target: number
  suffix?: string
  prefix?: string
}

export function NumberCounter({ target, suffix = '', prefix = '' }: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) motionValue.set(target)
  }, [isInView, motionValue, target])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
      }
    })
    return unsubscribe
  }, [springValue, suffix, prefix])

  return (
    <motion.span ref={ref}>
      {prefix}0{suffix}
    </motion.span>
  )
}
