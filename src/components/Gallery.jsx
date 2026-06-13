import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import Reveal from './Reveal'
import MediaPlaceholder from './MediaPlaceholder'

/*
  Desktop (3 cols), all rows same height = 1 col-width:
  Row 1: [0 span-2  2:1] [1 sq]
  Row 2: [2 sq] [3 sq] [4 sq]
  Row 3: [5 sq] [6 span-2  2:1]
  Row 4: [7 span-3  3:1]

  Mobile (2 cols), same height = 1 col-width:
  Row 1: [0 span-2  2:1]
  Row 2: [1 sq] [2 sq]
  Row 3: [3 sq] [4 sq]
  Row 4: [5 sq] [6 sq]
  Row 5: [7 span-2  2:1]

  Aspect ratio lives on the grid CELL → content fills with h-full w-full.
  Grid uses items-start so cells never stretch past their aspect ratio.
*/
const CELL = [
  { col: 'col-span-2',               aspect: 'aspect-[2/1]'                  },
  { col: 'col-span-1',               aspect: 'aspect-square'                 },
  { col: 'col-span-1',               aspect: 'aspect-square'                 },
  { col: 'col-span-1',               aspect: 'aspect-square'                 },
  { col: 'col-span-1',               aspect: 'aspect-square'                 },
  { col: 'col-span-1',               aspect: 'aspect-square'                 },
  { col: 'col-span-1 md:col-span-2', aspect: 'aspect-square md:aspect-[2/1]' },
  { col: 'col-span-2 md:col-span-3', aspect: 'aspect-[2/1] md:aspect-[3/1]'  },
]

export default function Gallery() {
  return (
    <section className="bg-cream-dark py-24 md:py-32">
      <div className="px-6">
        <Reveal className="text-center">
          <p className="font-sans text-xs tracking-[0.4em] text-taupe uppercase">
            {wedding.gallery.title}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-charcoal md:text-5xl">
            Моменты счастья
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 px-6">
        <div className="grid grid-cols-2 gap-2 items-start md:grid-cols-3 md:gap-3">
          {wedding.gallery.photos.map((photo, i) => {
            const cell = CELL[i] ?? { col: 'col-span-1', aspect: 'aspect-square' }
            return (
              <motion.div
                key={i}
                className={`overflow-hidden rounded-sm ${cell.col} ${cell.aspect}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <MediaPlaceholder
                    aspect=""
                    label={photo.alt}
                    className="h-full w-full"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
