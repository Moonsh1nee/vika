import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { wedding } from '../data/wedding'

export default function Cover({ isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="relative mx-6 w-full max-w-md cursor-pointer"
            onClick={onOpen}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Envelope flap */}
            <motion.div
              className="absolute -top-1 left-0 right-0 z-10 h-32 origin-top"
              style={{
                background: 'linear-gradient(180deg, #ebe4d8 0%, #d4cdc0 100%)',
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: -180, opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Envelope body */}
            <div className="relative overflow-hidden rounded-sm border border-taupe/20 bg-cream-dark px-8 py-16 shadow-2xl shadow-taupe/10">
              <div className="absolute inset-0 opacity-30">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#e8d5d0_0%,transparent_50%)]" />
              </div>

              <div className="relative text-center">
                <motion.p
                  className="mb-4 font-sans text-xs tracking-[0.4em] text-taupe uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Приглашение
                </motion.p>

                <motion.h1
                  className="font-script leading-tight text-charcoal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="block text-5xl">{wedding.couple.groom}</span>
                  <span className="block text-2xl text-taupe">&</span>
                  <span className="block text-5xl">{wedding.couple.bride}</span>
                </motion.h1>

                <motion.div
                  className="mx-auto mt-8 h-px w-16 bg-taupe/40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />

                <motion.p
                  className="mt-6 font-serif text-xl text-taupe italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {wedding.date.full}
                </motion.p>
              </div>
            </div>

            <motion.div
              className="mt-10 flex flex-col items-center gap-2 text-taupe/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="font-sans text-xs tracking-[0.3em] uppercase">Открыть</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}