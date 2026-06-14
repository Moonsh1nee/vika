import { wedding } from '../data/wedding'
import MediaPlaceholder from './MediaPlaceholder'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="px-6 py-12 text-center md:py-14">
        <h1
          className="font-sans font-light uppercase text-charcoal"
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 5rem)',
            letterSpacing: '0.16em',
            wordSpacing: '0.2em',
          }}
        >
          The Wedding Day
        </h1>

        <div className="mx-auto my-6 h-px w-30 bg-charcoal/20 md:my-8 md:w-90" />

        <p
          className="font-script font-normal text-charcoal"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
            letterSpacing: '0.1em',
            wordSpacing: '0.18em',
          }}
        >
          {wedding.couple.groom} &amp; {wedding.couple.bride}
        </p>
      </div>

      <div className="flex justify-center px-4 pb-16 md:px-6 md:pb-24">
        <div className="w-[94%] max-w-[1180px] overflow-hidden md:w-[92%]">
          {wedding.hero?.photo ? (
            <img
              src={wedding.hero.photo}
              alt="Главное фото"
              className="h-[400px] w-full object-contain object-center md:h-[580px] lg:h-[680px]"
              decoding="async"
              fetchPriority="high"
            />
          ) : (
            <MediaPlaceholder
              aspect=""
              className="h-[400px] w-full rounded-none md:h-[580px] lg:h-[680px]"
              label="Главное фото"
            />
          )}
        </div>
      </div>
    </section>
  )
}