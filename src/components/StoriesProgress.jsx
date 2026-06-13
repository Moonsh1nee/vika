import { motion, useScroll, useTransform } from 'framer-motion'

const SEGMENTS = 8

function Segment({ index, scrollYProgress }) {
  const start = index / SEGMENTS
  const end = (index + 1) / SEGMENTS
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true })

  return (
    <div className="flex-1 h-0.75 rounded-full bg-white/25 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="h-full rounded-full bg-white/80"
        style={{ scaleX, transformOrigin: 'left' }}
      />
    </div>
  )
}

export default function StoriesProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="bg-linear-to-b from-black/30 to-transparent px-4 pt-3 pb-6">
        <div className="flex gap-0.75">
          {Array.from({ length: SEGMENTS }, (_, i) => (
            <Segment key={i} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  )
}
