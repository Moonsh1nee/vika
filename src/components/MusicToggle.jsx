import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music } from 'lucide-react'
import { wedding } from '../data/wedding'

const BARS = [0, 1, 2, 3]
const BAR_DELAYS = [0, 0.2, 0.1, 0.3]

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const src = wedding.music?.src ?? null

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !src) return
    if (playing) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }, [playing, src])

  return (
    <>
      {src && (
        <audio ref={audioRef} src={src} loop preload="none" />
      )}

      <motion.button
        onClick={() => setPlaying((p) => !p)}
        className="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-charcoal/85 text-white shadow-xl backdrop-blur-md"
        title={playing ? 'Выключить музыку' : 'Включить музыку'}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
      >
        {playing ? (
          <span className="flex items-end gap-[3px] h-[14px]">
            {BARS.map((i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-white"
                animate={{ height: ['3px', '14px', '6px', '14px', '3px'] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  delay: BAR_DELAYS[i],
                  ease: 'easeInOut',
                }}
                style={{ display: 'block' }}
              />
            ))}
          </span>
        ) : (
          <Music className="h-4 w-4" strokeWidth={1.5} />
        )}
      </motion.button>
    </>
  )
}
