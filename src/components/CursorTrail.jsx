import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MAX_HEARTS = 18

export default function CursorTrail() {
  const [hearts, setHearts] = useState([])
  const lastRef = useRef(0)

  const spawn = useCallback((x, y) => {
    const now = Date.now()
    if (now - lastRef.current < 90) return
    lastRef.current = now

    const id = now + Math.random()
    setHearts((prev) => [
      ...prev.slice(-(MAX_HEARTS - 1)),
      {
        id,
        x,
        y,
        size: 10 + Math.random() * 9,
        drift: (Math.random() - 0.5) * 50,
        hue: Math.random() > 0.5 ? '#e8d5d0' : '#c4a882',
      },
    ])
  }, [])

  useEffect(() => {
    // Only on pointer devices (desktop)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const handle = (e) => spawn(e.clientX, e.clientY)
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [spawn])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.span
            key={h.id}
            className="absolute select-none leading-none"
            style={{
              left: h.x,
              top: h.y,
              fontSize: h.size,
              color: h.hue,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0.85, scale: 1, y: 0, x: 0 }}
            animate={{ opacity: 0, scale: 0.4, y: -44, x: h.drift }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            onAnimationComplete={() =>
              setHearts((prev) => prev.filter((p) => p.id !== h.id))
            }
          >
            ♥
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
