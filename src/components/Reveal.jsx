import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const offsets = {
    up: { y: 48, x: 0 },
    down: { y: -48, x: 0 },
    left: { y: 0, x: 48 },
    right: { y: 0, x: -48 },
  }

  const { x, y } = offsets[direction] ?? offsets.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}