import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['#f0d0ca', '#e8d5d0', '#d4b8b0', '#ddd0c5', '#c4a882']
const COUNT = 28

function makePetals() {
  return Array.from({ length: COUNT }, (_, id) => ({
    id,
    x: Math.random() * 100,
    size: 9 + Math.random() * 13,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: Math.random() * 2.4,
    duration: 4.5 + Math.random() * 3,
    drift: (Math.random() - 0.5) * 140,
    rotateStart: Math.random() * 360,
    rotateDelta: (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360),
  }))
}

export default function Petals({ active }) {
  const [visible, setVisible] = useState(false)
  const petals = useMemo(makePetals, [])

  useEffect(() => {
    if (!active || visible) return
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 8000)
    return () => clearTimeout(t)
  }, [active, visible])

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}vw`,
            top: -24,
            width: p.size * 0.65,
            height: p.size,
            background: `radial-gradient(ellipse at 35% 30%, ${p.color}ee, ${p.color}88)`,
            borderRadius: '50% 50% 50% 0',
            boxShadow: `0 1px 4px rgba(0,0,0,0.08)`,
          }}
          initial={{ y: -24, x: 0, rotate: p.rotateStart, opacity: 0.9 }}
          animate={{
            y: '110vh',
            x: p.drift,
            rotate: p.rotateStart + p.rotateDelta,
            opacity: [0.9, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.2, 0, 0.8, 1],
            opacity: { times: [0, 0.6, 0.85, 1], duration: p.duration, delay: p.delay },
          }}
        />
      ))}
    </div>
  )
}
